import{test} from "@playwright/test"
test("amazon",async({page})=>{
    await page.goto("https://www.zepto.com/search")
    await page.locator("//input[@id='«R12utrea4tb»--input']").click()
    await page.locator("//input[@id='«R12utrea4tb»--input']").fill("lemon")
    await page.keyboard.press("Enter")
     await page.locator("(//div[@class='c8QQnr cCX8Kb c6xSKo'])[1]").click()
     await page.locator(`(//div[@aria-label="Add to Cart" and .='Add To Cart'])[2]`).click()
     await page.locator("//span[.='Cart']").click()

    await page.waitForTimeout(2000)
})