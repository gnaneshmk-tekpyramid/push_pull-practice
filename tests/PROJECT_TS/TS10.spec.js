import {test,expect} from "@playwright/test"
import landing from "../../PROJECT_E2E/Project_POM/Landing.page.js"
import home from "../../PROJECT_E2E/Project_POM/Home.page.js"
import children_teen from "../../PROJECT_E2E/Project_POM/Children_teen.page.js"
import yourcart from "../../PROJECT_E2E/Project_POM/YourCart.page.js"
import DOfAWK from "../../PROJECT_E2E/Project_POM/Diary_of_a_Wk.page.js"
import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"



test("order, cart after re_login",async({page})=>{
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
   await HP.hpChildern_teenlink.click()

   //===children_teen=====
   let C_T=new children_teen(page)
   await C_T.B_Diaryofa_link.click()

   //====DofAWK=========
   let DOAWK=new DOfAWK(page)
   await DOAWK.quantityDD.selectOption({value:"3"}) 
   await DOAWK.addtocartbtn.click()


   //======YOUR CART=======
   let YC= new yourcart(page)
   await YC.YClogoutbtn.click()

   //====landing page======
   
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

    //===hoe page====

    await HP.cart.click()

    //=====your cart=========
   
      //handlig alert (successfully placed)
       await page.once("dialog",async(dialog1)=>{
        await dialog1.accept()
         let msg= await dialog1.message() 
        await console.log(msg);
    
        //ASSERTION
        await expect(msg).toContain("Order SuccessFully Placed!!")
    
    })
    //click  on place order
    await YC.YCplaceorderbtn.click()
    
    //logout
    await YC.YClogoutbtn.click()
  
   
// await page.waitForTimeout(2000)
})