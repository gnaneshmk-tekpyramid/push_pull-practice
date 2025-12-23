import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
test("write",async({page})=>{
let book= new excel.Workbook()                       
await book.xlsx.readFile(path.join(__dirname,"../../test_Data/write_into_excel.xlsx"))
let sheet= book.getWorksheet("written")
if(!sheet)
{
 sheet= book.addWorksheet("written")
}
sheet.getRow(1).getCell(1).value="hellooooo"
await book.xlsx.writeFile(path.join(__dirname,"../../test_Data/write_into_excel.xlsx"))
})

test.only("amazondata",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByRole("searchbox",{name:"Search Amazon.in"}).fill("shoes")
    await page.locator("//div[@role='row']").first().waitFor()
    let list=await page.locator("//div[@role='row']").allTextContents()
    console.log(list);

    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../test_Data/write_into_excel.xlsx"))
    let sheet=book.getWorksheet("Amazon")
    if(!sheet){
        sheet = book.addWorksheet("Amazon")
    }
    for(let r=1;r<=list.length;r++)
    {
        sheet.getRow(1).getCell(r).value=list[r-1]
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../test_Data/write_into_excel.xlsx"))
    await page.waitForTimeout(3000)
})