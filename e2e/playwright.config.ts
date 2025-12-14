import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './',
    timeout: 30000,
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    reporter: [['html', { outputFolder: 'reports' }]]
});
