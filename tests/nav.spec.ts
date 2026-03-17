import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("desktop nav renders correctly", async ({ page }) => {
    await page.goto("http://localhost:3001");
    await page.waitForLoadState("networkidle");

    // Desktop nav links should be visible
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();

    // Hamburger should be hidden on desktop
    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).not.toBeVisible();

    await page.screenshot({ path: "tests/screenshots/desktop-nav.png", fullPage: false });
  });

  test("mobile nav: burger icon is at top-right", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); // iPhone 14
    await page.goto("http://localhost:3001");
    await page.waitForLoadState("networkidle");

    // Desktop nav should be hidden on mobile
    const nav = page.locator("header nav");
    await expect(nav).not.toBeVisible();

    // Hamburger should be visible
    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).toBeVisible();

    // Check burger is at the RIGHT side of the viewport
    const box = await hamburger.boundingBox();
    expect(box).not.toBeNull();
    console.log(`Burger icon bounding box: x=${box!.x}, y=${box!.y}, width=${box!.width}, height=${box!.height}`);

    // Burger right edge should be within 20px of viewport right edge
    const burgerRight = box!.x + box!.width;
    expect(burgerRight).toBeGreaterThan(390 - 40); // within 40px of right edge

    // Burger should be near the top (within first 80px)
    expect(box!.y).toBeLessThan(80);

    // Burger should NOT be centered (center x should be > 60% of viewport width)
    const burgerCenterX = box!.x + box!.width / 2;
    expect(burgerCenterX).toBeGreaterThan(390 * 0.6);

    await page.screenshot({ path: "tests/screenshots/mobile-nav-closed.png", fullPage: false });
  });

  test("mobile nav: menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("http://localhost:3001");
    await page.waitForLoadState("networkidle");

    // Open menu
    await page.click('button[aria-label="Open menu"]');
    await page.waitForTimeout(300);

    // Check overlay is visible with nav links
    const closeBtn = page.locator('button[aria-label="Close menu"]');
    await expect(closeBtn).toBeVisible();

    await page.screenshot({ path: "tests/screenshots/mobile-nav-open.png", fullPage: false });

    // Close menu
    await closeBtn.click();
    await page.waitForTimeout(300);

    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).toBeVisible();

    await page.screenshot({ path: "tests/screenshots/mobile-nav-closed-again.png", fullPage: false });
  });
});
