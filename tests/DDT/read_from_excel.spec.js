import {test} from "@playwright/test"
import excel from 'exceljs' //importing exeljs as excel so we can use its methodds as excel. in the script
import path from "path"
test("read from excel",async({page})=>{
    //reading single data to our script
    let book =await new excel.Workbook()
    await book.xlsx.readFile("E:/aplaywright/test_Data/readfromexcel.xlsx") 
    let sheet =await book.getWorksheet("1-sheet")
   let data= await sheet.getRow(1).getCell(1).toString()
   console.log(data);
 })

 test("read_multiple",async({page})=>{
  //reading multiple data to our script
  let book= await new excel.Workbook()
  await book.xlsx.readFile(path.join(__dirname,"../../test_Data/readmulfromexcel.xlsx"))
  let sheet = await book.getWorksheet("multiple")
  for (let r=1;r<=sheet.actualRowCount;r++)
  {
    for (let c=1;c<=sheet.actualColumnCount;c++){

      let data=await sheet.getRow(r).getCell(c).value
      console.log(data);
    }
  }
})


test.only("testdata_crm",async({page})=>{

let book = new excel.Workbook()
await book.xlsx.readFile(path.join(__dirname,"../../test_Data/crmpracticeupload.xlsx"))
let sheet = book.getWorksheet("crmupload")
let alldata=[]                     //to store data
for(let r=1;r<=sheet.actualRowCount;r++)
{
 let row= await  sheet.getRow(r)
 let url=row.getCell(1).toString()
 let un=row.getCell(2).toString()
 let pwd=row.getCell(3).toString()

await alldata.push({url:url,username:un,password:pwd}) //adding data into array
}
console.log(alldata);
for(let ele of alldata){
await page.goto(ele.url)
await page.waitForTimeout(2000)
let p2=page.waitForEvent("popup")
await page.locator("//a[contains(.,'Small CRM')]").click()
let page2=await p2
await page2.getByRole("link",{name:'Admin'}).click()
await page2.locator("#txtusername").fill(ele.username)
await page2.locator("#txtpassword").fill(ele.password)
await page2.waitForTimeout(2000)

await page2.getByRole("button",{name:"Login"}).click()
await page2.waitForTimeout(2000)
await page2.close()
}
})