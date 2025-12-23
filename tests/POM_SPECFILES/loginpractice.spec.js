import {test} from "@playwright/test"
import loginpagepractice from "E:/aplaywright/POM_DDTData/loginpagepractice.json"
import loginpractice from "../../POM_JS_FILES/loginpractice.page.js"


test("POMlogin practice",async({page})=>{
let LINpage=new loginpractice(page)
//launch url
await page.goto(loginpagepractice.url)
//enter username TF
await LINpage.usernameTextField.fill(loginpagepractice.username)

//enter password TF
await LINpage.passwordTextField.fill(loginpagepractice.password)
//click on login BTN
await LINpage.submitButton.click()
await page.waitForTimeout(2000)
})