const { test, expect } = require("@playwright/test");

test("Valid login", async function ({ page }) {
    await page.goto("https://25pj.bubbleapps.io/version-test");

    await page.getByPlaceholder("johnsmith@gmail.com").type("takumi.iimure@monstar-lab.com");
    await page.getByPlaceholder("***********").type("ii");
    await page.locator("//button[contains(text(),'ログイン')]").click();
    await expect(page).toHaveURL(/admin_home/);
    await page.locator("//button[contains(text(),'新・既社員情報')]").click();
    await page.getByRole("button", { name: "新規登録" }).click();
    await page.getByPlaceholder("name").waitFor({ state: "visible" });
    await page.getByRole("textbox", { name: "name" }).type("テスト太郎");
    await page.getByRole("textbox", { name: "@monstar-lab" }).type("test@monstar-lab.com");
    
});