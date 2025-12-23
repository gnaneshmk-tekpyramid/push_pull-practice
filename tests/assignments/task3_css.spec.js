import {test,expect} from "@playwright/test"
test("task 3",async({page})=>{
await page.goto("https://www.facebook.com/")
let cssval=await page.locator("//button[@name='login']")
await expect(await cssval).toHaveCSS("font-family","Helvetica, Arial, sans-serif")

})