import { test, expect } from '@playwright/test'

test('navigate through blog SPA', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page.locator('text=Welcome to BlogSPA')).toBeVisible()

  await page.click('text=Blog')
  await expect(page.locator('text=React Router v6 Guide')).toBeVisible()

  await page.click('text=Read more')
  await expect(
    page.locator('text=Full article about React Router v6')
  ).toBeVisible()
})
