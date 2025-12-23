import {test,expect} from "@playwright/test"
test("authentication",async ({browser}) => {
   let context= await browser.newContext({httpCredentials:{username:"admin",
                                                           password:"admin"}})
     let page= await context.newPage()
       await page.goto("https://demoapps.qspiders.com/ui/auth?sublist=0")
     let np= page.waitForEvent('popup')  
       await page.locator('#AuthLink').click()
     let page2=await np
       await expect(page2.locator("//p")).toContainText("congratulations")
       await page2.waitForTimeout(3000)
      







})