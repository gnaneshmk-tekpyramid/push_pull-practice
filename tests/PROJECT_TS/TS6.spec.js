import {test,expect} from "@playwright/test"
import landing from "../../PROJECT_E2E/Project_POM/Landing.page.js"
import home from "../../PROJECT_E2E/Project_POM/Home.page.js"
import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"




test("Ask Query",async({page})=>{
        //====LANDING PAGE====
    //Launch url
    await page.goto(e2eDATA.urle2e)
  

    let LP= new landing(page)
    //Click on Login Btn
    await LP.Loginbtn.click()
    //Enter UN (LI)
    await LP.LiUSNtf.fill(e2eDATA.loginUN)
    //Enter PWD (LI)
    await LP.LiPWDtf.fill(e2eDATA.loginPWD)

    //Handle alert popup
    page.once("dialog",async(dialog)=>{
        await dialog.accept()        //handling alertpopup
        let msg= await dialog.message()
        console.log(msg);
    })
    //Click on Login BTN
    await LP.LiSIbtn.click()
    
    //======HOME======
   let HP= new home(page)
   //click on ask query
   await HP.AskQuerybtn.click()
   // fill name
   await HP.AQyourname.fill(e2eDATA.queryname)
   //fill email
   await HP.AQemail.fill(e2eDATA.query_email)
   //fill query
   await HP.AQquerytf.fill(e2eDATA.query_text)

   //handlig alert (successfully qyery raised)
   await page.once("dialog",async(dialog1)=>{
    await dialog1.accept()
     let msg= await dialog1.message() 
    await console.log(msg);

    //ASSERTION
    await expect(msg).toContain("Our customer executive would respond shortly")

})
//click on send quert btn
   await HP.AQsendquerybtn.click()
    
   //click on logout btn
   await HP.hpLogoutbtn.click()
    




    // await page.waitForTimeout(2000)
})