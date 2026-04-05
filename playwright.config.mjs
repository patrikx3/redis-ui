import { defineConfig } from '@playwright/test';

const baseHost = process.env.P3XR_URL || 'http://localhost:7843';

export default defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.js',
    timeout: 30000,
    retries: 0,
    workers: 1,
    use: {
        headless: process.env.P3XR_HEADLESS !== 'false',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'angular',
            use: {
                browserName: 'chromium',
                baseURL: `${baseHost}/ng/`,
            },
        },
        {
            name: 'react',
            use: {
                browserName: 'chromium',
                baseURL: `${baseHost}/react/`,
            },
        },
    ],
    reporter: [['list'], ['html', { open: 'never', outputFolder: 'test-results' }]],
});
