import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './src/tests/e2e',
  timeout: 30 * 1000,
  use: {
    headless: true,
  },
})
