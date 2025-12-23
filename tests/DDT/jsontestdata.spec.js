import {test} from "@playwright/test"
import fs from "fs"
let jsonfile= fs.readFileSync("E:/aplaywright/test_Data/singlesetdata.json")
let datafile=JSON.parse(jsonfile)
//single data
test("single data upload",async({page})=>{
console.log(datafile.greet);
})


//multiple data_set example
test("multiple data upload",async({page})=>{
datafile.forEach( data=> {   //use for each to iterate 
     console.log(data.greet);
});
})

//single data_set---- upload to website
let uploadjsondata= fs.readFileSync("E:/aplaywright/test_Data/upload_data.json")
let uploaddata=JSON.parse(uploadjsondata)
test("uploadfromJSON",async({page})=>{

    await page.goto(uploaddata.url)
    await page.getByRole("textbox",{name:"username"}).fill(uploaddata.username)
    await page.getByRole("textbox",{name:"password"}).fill(uploaddata.password)
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

    await page.waitForTimeout(3000)
})


//multiple set data upload======for(  of  )
let jsonupload=fs.readFileSync("E:/aplaywright/test_Data/multiple_objset.json")
let uploadset=JSON.parse(jsonupload)

test("multiple set upload json",async({page})=>{
    for(let val of uploadset){
        let url= val.url
        let username=val.username
        let password=val.password
      await page.goto(url)
     await page.getByRole("textbox",{name:"username"}).fill(username)
      await page.getByRole("textbox",{name:"password"}).fill(password)
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
     await page.waitForTimeout(2000)}
})
 




