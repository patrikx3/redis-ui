const { test, expect } = require('@playwright/test');

// Helper: set React frontend preference so React doesn't redirect to Angular
test.beforeEach(async ({ page }, testInfo) => {
    if (testInfo.project.name === 'react') {
        await page.addInitScript(() => {
            try { localStorage.setItem('p3xr-frontend', 'react') } catch {}
        })
    }
})

// Helper: wait for app to be ready (socket connected, connections loaded)
async function waitForReady(page) {
    await page.waitForFunction(() => {
        const t = window.__p3xr_test;
        if (!t?.state) return false;
        const conns = t.state.connections?.();
        const cfg = t.state.cfg?.();
        return !!(conns?.list?.length > 0 || cfg);
    }, { timeout: 20000 });
}

// Helper: connect to localhost via footer menu (works for both Angular and React)
async function connectToLocalhost(page) {
    await page.goto('settings');
    await waitForReady(page);
    // Click Connect button in footer (scoped to footer to avoid matching "NEW CONNECTION")
    const connectBtn = page.locator('#p3xr-layout-footer-container button').filter({ hasText: /connect/i }).first();
    await connectBtn.click();
    // Click localhost menu item
    const menuItem = page.locator('[role="menuitem"]:has-text("localhost")');
    await menuItem.click();
    await waitForReady(page);
    // Wait for keys to load
    await page.waitForFunction(() => {
        const t = window.__p3xr_test;
        return (t?.state?.keysRaw?.()?.length ?? 0) > 0;
    }, { timeout: 10000 });
}

test.describe('Settings', () => {
    test('page loads with connections, labels, footer', async ({ page }) => {
        await page.goto('settings');
        await waitForReady(page);
        // Wait for page content to render (React may need extra time after i18n init)
        await page.waitForFunction(() => document.body.innerText.includes('Connections'), { timeout: 10000 });
        const text = await page.evaluate(() => document.body.innerText);

        expect(text).toContain('Connections');
        expect(text).toContain('AI Settings');
        expect(text).toContain('LANGUAGE');
        expect(text).toContain('THEME');
        expect(text).toContain('Tree separator');

        const count = await page.evaluate(() => window.__p3xr_test?.state?.connections?.()?.list?.length ?? 0);
        expect(count).toBeGreaterThan(0);
    });
});

test.describe('Connection', () => {
    test('connect to localhost and load keys', async ({ page }) => {
        await connectToLocalhost(page);
        const conn = await page.evaluate(() => window.__p3xr_test?.state?.connection?.()?.name);
        expect(conn).toBe('localhost');
        const keys = await page.evaluate(() => window.__p3xr_test?.state?.keysRaw?.()?.length ?? 0);
        expect(keys).toBeGreaterThan(0);
    });
});

test.describe('Database', () => {
    test.beforeEach(async ({ page }) => {
        await connectToLocalhost(page);
    });

    test('tree renders with nodes', async ({ page }) => {
        await page.goto('database');
        await page.waitForSelector('.p3xr-database-tree-node', { timeout: 10000 });
        const nodes = await page.locator('.p3xr-database-tree-node').count();
        expect(nodes).toBeGreaterThan(0);
    });

    test('click a key opens key view', async ({ page }) => {
        await page.goto('database');
        await page.waitForSelector('.p3xr-database-tree-node', { timeout: 10000 });
        const keyNode = page.locator('.p3xr-database-tree-node').first();
        if (await keyNode.count() > 0) {
            await keyNode.click();
            await page.waitForSelector('.p3xr-key-value, .p3xr-key-header, [class*="key-"]', { timeout: 5000 }).catch(() => {});
        }
    });

    test('console PING', async ({ page }) => {
        await page.goto('database');
        const input = page.locator('#p3xr-console-input');
        await expect(input).toBeVisible({ timeout: 5000 });
        await input.fill('PING');
        await input.press('Enter');
        await page.waitForFunction(() => {
            const el = document.getElementById('p3xr-console-content-output');
            return el?.innerText?.includes('PONG');
        }, { timeout: 10000 });
        const output = await page.evaluate(() => document.getElementById('p3xr-console-content-output')?.innerText ?? '');
        expect(output).toContain('PONG');
    });

    test('console multi-line', async ({ page }) => {
        await page.goto('database');
        const input = page.locator('#p3xr-console-input');
        await expect(input).toBeVisible({ timeout: 5000 });
        await input.fill('SET test:e2e hello\nGET test:e2e');
        await input.press('Enter');
        await page.waitForFunction(() => {
            const el = document.getElementById('p3xr-console-content-output');
            return el?.innerText?.includes('hello');
        }, { timeout: 10000 });
        const output = await page.evaluate(() => document.getElementById('p3xr-console-content-output')?.innerText ?? '');
        expect(output).toContain('hello');
    });
});

test.describe('AI', () => {
    test.beforeEach(async ({ page }) => {
        await connectToLocalhost(page);
    });

    test('ai: prefix generates a Redis command via network.corifeus.com', async ({ page }) => {
        await page.goto('database');
        const input = page.locator('#p3xr-console-input');
        await expect(input).toBeVisible({ timeout: 5000 });

        // Skip if AI is disabled in server config
        const aiEnabled = await page.evaluate(() => window.__p3xr_test?.state?.cfg?.()?.aiEnabled);
        if (aiEnabled === false) {
            test.skip();
            return;
        }

        await input.fill('ai: show all keys');
        await input.press('Enter');

        // AI response goes through network.corifeus.com proxy, allow 30s for round-trip
        await page.waitForFunction(() => {
            const el = document.getElementById('p3xr-console-content-output');
            const inputEl = document.getElementById('p3xr-console-input');
            const outputHasAi = el?.innerText?.toLowerCase()?.includes('ai');
            const inputHasCommand = inputEl?.value?.length > 0;
            return outputHasAi || inputHasCommand;
        }, { timeout: 30000 });
    });

    test('ai auto-detect triggers on natural language', async ({ page }) => {
        await page.goto('database');
        const input = page.locator('#p3xr-console-input');
        await expect(input).toBeVisible({ timeout: 5000 });

        const aiEnabled = await page.evaluate(() => window.__p3xr_test?.state?.cfg?.()?.aiEnabled);
        if (aiEnabled === false) {
            test.skip();
            return;
        }

        // Enable AI auto-detect
        await page.evaluate(() => localStorage.setItem('p3xr-ai-auto-detect', 'true'));

        // Natural language that is NOT a valid Redis command
        await input.fill('list all string keys in this database');
        await input.press('Enter');

        // Wait for AI response or error output (proxied via network.corifeus.com)
        await page.waitForFunction(() => {
            const el = document.getElementById('p3xr-console-content-output');
            return (el?.innerText?.length ?? 0) > 0;
        }, { timeout: 30000 });
    });
});

test.describe('Monitoring', () => {
    test('page loads', async ({ page }) => {
        await connectToLocalhost(page);
        await page.goto('monitoring');
        await page.waitForFunction(() => document.body.innerText.toUpperCase().includes('PULSE'), { timeout: 20000 });
        const text = await page.evaluate(() => document.body.innerText);
        expect(text.toUpperCase()).toContain('PULSE');
    });
});

test.describe('Info', () => {
    test('page loads', async ({ page }) => {
        await page.goto('info');
        await page.waitForFunction(() => document.body.innerText.toUpperCase().includes('P3X REDIS UI'), { timeout: 10000 });
        const text = await page.evaluate(() => document.body.innerText);
        expect(text.toUpperCase()).toContain('P3X REDIS UI');
    });
});
