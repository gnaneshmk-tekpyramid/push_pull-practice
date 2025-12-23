import {test,expect} from "@playwright/test"
test("dialogs",async({page})=>{
    //=====by default playwright rejects the popups============
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator("//button[@id='alertBtn']").click()
await page.waitForTimeout(1000)
await page.locator("//button[@id='confirmBtn']").click()
await expect(page.locator("#demo")).toContainText("Cancel")
await page.waitForTimeout(1000)
await page.locator("//button[@id='promptBtn']").click()
await page.waitForTimeout(1000)

///////////////////////////////////////////////////////////////////
//==to handle the dialogs explicitely==page.on()==page.once()=== event listener==
page.on("dialog",async(dialog)=>{
    if(dialog.type()=="alert")////////////recognising the type of event it is
    {    console.log(await dialog.message()); ////to get the pop up message
        await dialog.accept()}
    
    else if(dialog.type()=="prompt")
    {     console.log(await dialog.message()) 
         console.log(await dialog.defaultValue()); //to get the default of the prompt textarea
        if(dialog.defaultValue()=="tom"){
            console.log(await dialog.defaultValue())}
            else{
               await  dialog.accept("ajay")
            }
        }
    
    else if(dialog.type()=="confirm")
    {await dialog.dismiss()}
})


await page.locator("//button[@id='alertBtn']").click()
await page.waitForTimeout(1000)
await page.locator("//button[@id='confirmBtn']").click()
await page.waitForTimeout(1000)
await page.locator("//button[@id='promptBtn']").click()
await expect(page.locator("#demo")).toContainText("ajay")
await page.waitForTimeout(1000)
})

//page.once("dialog",(dialog)=>{})

    test("page.once",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

        await page.locator("//button[@id='alertBtn']").click()
await page.waitForTimeout(1000)
await page.locator("//button[@id='confirmBtn']").click()
await page.waitForTimeout(1000)
page.once("dialog",async(dialog)=>{dialog.accept("asdfghjk")})
await page.locator("//button[@id='promptBtn']").click()
await page.waitForTimeout(1000)
await page.reload()
await page.locator("//button[@id='promptBtn']").click()
await page.waitForTimeout(3000)
    })




