import{test} from "@playwright/test"
test("task 4",async({page})=>{
    await page.goto("https://testpages.eviltester.com/styled/alerts/alert-test.html")
    await page.on("dialog",async(dialog)=>{ 
        if(dialog.type()=="prompt"){
            await dialog.accept("ok!,I changed you")}
            else{ await dialog.dismiss()
           }})
    await page.locator("//button[@id='alertexamples']").click()
    await page.getByRole("button",{name:"Show confirm box"}).click()
    await page.locator("//button[@id='promptexample']").click()

    await page.waitForTimeout(3000)
})