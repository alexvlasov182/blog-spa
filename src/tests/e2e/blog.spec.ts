import { test, expect } from '@playwright/test'

test('navigate through blog SPA', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await expect(page.locator('text=Welcome to BlogSPA')).toBeVisible()

  await page.click('text=Blog')

  await expect(
    page.locator('text=Learn React Router, Clean Architecture, and Tailwind')
  ).toBeVisible()
})
