import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.js',
    timeout: 30000,
    retries: 0,
    workers: 1,
    use: {
        baseURL: process.env.P3XR_URL || 'http://localhost:7843',
        headless: process.env.P3XR_HEADLESS !== 'false',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
    ],
    reporter: [['list'], ['html', { open: 'never', outputFolder: 'test-results' }]],
});
