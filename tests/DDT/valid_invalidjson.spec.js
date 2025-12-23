import {test} from "@playwright/test"
import data1 from "../../test_Data/valid_invalid_multipledata.json"


//multiple data stored as values for keys:valid and invalid
test("valid invalid dataset",async({page})=>{

for(let d of data1.valid)
{
     await page.goto(d.url)
     await page.getByRole("textbox",{name:"username"}).fill(d.username)
      await page.getByRole("textbox",{name:"password"}).fill(d.password)
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
}
    
for(let d1 of data1.invalid)
{
     await page.goto(d1.url)
     await page.getByRole("textbox",{name:"username"}).fill(d1.username)
      await page.getByRole("textbox",{name:"password"}).fill(d1.password)
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
}

})

//////passing valid , invalid keys dynamically

test.only("valid invalid",async({page})=>{
for(let key in data1){
   console.log(key);
for(let d of data1[key])
{
     await page.goto(d.url)
     await page.getByRole("textbox",{name:"username"}).fill(d.username)
      await page.getByRole("textbox",{name:"password"}).fill(d.password)
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
}
}
})