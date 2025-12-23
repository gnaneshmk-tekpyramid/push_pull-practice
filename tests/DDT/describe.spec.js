import {test} from "@playwright/test"
import data from "../../test_Data/upload_data.json"
test.describe("grouping test blocks",async()=>{
let url=data.url
let un=data.username
 let pwd=data.password

test("test1",async({page})=>{
 await page.goto(url)
     await page.getByRole("textbox",{name:"username"}).fill(un)
      await page.getByRole("textbox",{name:"password"}).fill(pwd)
      await page.getByRole("button",{name:"Submit"}).click()
      let title=await page.title()
     if(title=="Logged In Successfully | Practice Test Automation")
     {
        console.log("valid credentials");
     }
     else
     {
        console.log("invalid credentials");
     }
 await page.waitForTimeout(2000)
})

test("test11",async({page})=>{
 await page.goto(url)
     await page.getByRole("textbox",{name:"username"}).fill(un)
      await page.getByRole("textbox",{name:"password"}).fill(pwd)
      await page.getByRole("button",{name:"Submit"}).click()
      let title=await page.title()
     if(title=="Logged In Successfully | Practice Test Automation")
     {
        console.log("valid credentials");
     }
     else
     {
        console.log("invalid credentials");
     }
 await page.waitForTimeout(2000)
})
test("test111",async({page})=>{
 await page.goto(url)
     await page.getByRole("textbox",{name:"username"}).fill(un)
      await page.getByRole("textbox",{name:"password"}).fill(pwd)
      await page.getByRole("button",{name:"Submit"}).click()
      let title=await page.title()
     if(title=="Logged In Successfully | Practice Test Automation")
     {
        console.log("valid credentials");
     }
     else
     {
        console.log("invalid credentials");
     }
 await page.waitForTimeout(2000)
})


})






