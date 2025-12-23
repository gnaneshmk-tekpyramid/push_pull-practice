import {test,expect} from "@playwright/test"
import landing from "../../PROJECT_E2E/Project_POM/Landing.page.js"
import home from "../../PROJECT_E2E/Project_POM/Home.page.js"
import Like_aLS from "../../PROJECT_E2E/Project_POM/Likea_Love_song.page.js"
import yourcart from "../../PROJECT_E2E/Project_POM/YourCart.page.js"
import children_teen from "../../PROJECT_E2E/Project_POM/Children_teen.page.js"
import DOfAWK from "../../PROJECT_E2E/Project_POM/Diary_of_a_Wk.page.js"
import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"


test("add and remove from cart ",async({page})=>{

    
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
     
    //===home====
    let HP=new home(page)
    //click on a book 
    await HP.book_like_aLS.click()

    //====Like a Lovesong page====
    let Like_als=new Like_aLS(page)
    //add to cart
    await Like_als.AddtoCart.click()

    //====your cart=====
    let YC= new yourcart(page)

    //click on continue shopping
    await YC.continueshoppingbtn.click()
    
    //======HOME======
   //click on link
   await HP.hpChildern_teenlink.click()

   //===children_teen=====
   let C_T=new children_teen(page)
   //click on a book
   await C_T.B_Diaryofa_link.click()

   //====DofAWK=========
   let DOAWK=new DOfAWK(page)
   //select quantity
   await DOAWK.quantityDD.selectOption({value:"3"}) 
   //click on add to cart
   await DOAWK.addtocartbtn.click()

  //===your cart=====

  //Handle alert popup
    page.once("dialog",async(dialog)=>{
        await dialog.accept()        //handling alertpopup
        let msg= await dialog.message()
        console.log(msg);
    }) 
    //click on remove btn
     await YC.Removebtn.click()


    //handlig alert (successfully placed)
   await page.once("dialog",async(dialog1)=>{
    await dialog1.accept()
     let msg= await dialog1.message() 
    await console.log(msg);

    //ASSERTION
    await expect(msg).toContain("Order SuccessFully Placed!!")

})
    // click on place order
     await YC.YCplaceorderbtn.click()
    
     //click on logout
     await YC.YClogoutbtn.click()

//    await  page.waitForTimeout(2000)
})