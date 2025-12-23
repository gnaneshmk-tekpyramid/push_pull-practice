import{test,expect} from "@playwright/test"

// test("radiobutton",async({page})=>{
//  await page.goto("https://demoapps.qspiders.com/ui/radio?sublist=0")
//  await page.locator("//input[@id='attended']").check()
 
//  //asserting
//  console.log(await page.locator("//input[@id='attended']").isChecked());
//  await expect(await page.locator("//input[@id='attended']")).toBeChecked()
 
//  //await expect(await page.locator("//input[@id='attended']").isChecked()).toBeFalsy() //expects false
 
//  await page.waitForTimeout(2000)
// })

test("check box",async({page})=>{
 
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.locator("#domain_a").check()
    await page.waitForTimeout(2000)

    //assertion
await expect(await page.locator("#domain_a")).toBeChecked()

    await page.locator("#domain_a").uncheck()

        //assertion not to be checked

        await expect(await page.locator("#domain_a").isChecked()).toBeFalsy()

    

await page.waitForTimeout(2000)
})