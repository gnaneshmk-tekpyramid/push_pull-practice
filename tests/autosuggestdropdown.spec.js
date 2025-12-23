import{test} from "@playwright/test"
test("autosuggestdropdown",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder("Search Amazon.in").fill("playstation 5")
    await page.locator("//div[@role='row']").first().waitFor()
//     let opt=await page.locator("//div[@role='row']").all()
//    console.log(opt);
//    for(let ele of opt)                      ////by using xpaths
//    {
//       let text=await ele.allTextContents()
//       if(text.includes("playstation card"))
//       {
//         ele.click()
//         break
//       }
//    }


   //by using keyboard

await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")

   await page.waitForTimeout(2000)
})
