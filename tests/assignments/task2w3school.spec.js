import {test} from "@playwright/test"
test("w3school",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open")
          
    let page1url=await page.url()


      const [page2] = await Promise.all([
         page.waitForEvent("popup"),
         page.keyboard.press("Tab"),
        page.keyboard.press("Enter")])
     let page2url=await page2.url()
     console.log("page 1 url=>"+page1url);
     console.log("page 2 url=>"+page2url);
     
     await page2.close()
     await page.waitForTimeout(3000)
})