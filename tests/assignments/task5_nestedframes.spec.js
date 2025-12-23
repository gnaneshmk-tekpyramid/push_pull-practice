import {test} from "@playwright/test"
test("task 5",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/")
    await page.locator('//a[text()="File Download"]').click({force:true})
    let [downlaod] = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("link",{name:"text.txt"}).click()
    ])
    console.log(await downlaod.path());
    await downlaod.saveAs(path.join(__dirname,"../download_file_tester",downlaod.suggestedFilename()))
    await page.goBack()
    await page.locator('//a[text()="File Upload"]').click({force:true})
    await page.locator('//input[@id="file-upload"]').setInputFiles(path.join(__dirname,"../download_file_tester/first.txt"))
    await page.locator('//input[@id="file-submit"]').click()
    let fullpath = await path.join(__dirname,"../download_file_tester/first.txt")
    if(fs.existsSync(fullpath)){
        console.log("File Path Exists");  
        }
 await page.waitForTimeout(3000)
})
