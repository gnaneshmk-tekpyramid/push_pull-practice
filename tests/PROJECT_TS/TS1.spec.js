//TS1---SIGNUP AND LOGIN 
import {test,expect} from "@playwright/test"
import landing from "../../PROJECT_E2E/Project_POM/Landing.page.js"
import home from "../../PROJECT_E2E/Project_POM/Home.page.js"
import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"

test("SignUP-Login",async({page})=>{
     //====LANDING PAGE====
    //Launch url
    await page.goto(e2eDATA.urle2e)
  
    let LP= await new landing(page)

    //click on signup btn
   
    await LP.SUclick(LP)
    //Enter UN (SI)
    // await LP.SuUSNtf.fill(e2eDATA.signupUN)
    await LP.SUUNtffill(LP)
   
    //EnterPWD (SI)
    // await LP.SuPWDtf.fill(e2eDATA.signupPWD)
    await LP.SUpwdfill(LP)
    
   // // Handle alert popup      -----------popup
    //  page.once("dialog",async(dialog)=>{
    //     await dialog.accept()        //handling alertpopup
    //     let msg= await dialog.message()
    //     console.log(msg);
    // })
    // //click on SI btn
    // await LP.SuSIbtn.click() //------trigger
    await LP.clickSUbtn_assert(LP,page)

    
    // //Click on Login Btn------------------------
    // await LP.Loginbtn.click()
    // //Enter UN (LI)
    // await LP.LiUSNtf.fill(e2eDATA.loginUN)
    // //Enter PWD (LI)
    // await LP.LiPWDtf.fill(e2eDATA.loginPWD)

    // //Handle alert popup
    // page.once("dialog",async(dialog)=>{  ------------handling popup
    //     await dialog.accept()        //handling alertpopup
    //     let msg= await dialog.message()
    //     console.log(msg);
    // })
    // //Click on Login BTN
    // await LP.LiSIbtn.click()-----------------trigger for popup
    await LP.LOGINprocess_assertlogin(LP,page)

    
    //======HOME======
   let HP= new home(page)
    
    //ASSERT LOGIN PAGE
   await expect(HP.headingtxt).toContainText("Hello")
    

    //Click on LOGOUT
    // await HP.hpLogoutbtn.click()
    await HP.homelogoutbtnclick(HP)

    // await page.waitForTimeout(2000)
})