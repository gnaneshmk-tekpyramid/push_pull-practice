import {test,expect} from "@playwright/test"
import landing from "../../PROJECT_E2E/Project_POM/Landing.page.js"
import Byauthor_CB from "../../PROJECT_E2E/Project_POM/Byauthor_CB.page.js"
import ONaCC from "../../PROJECT_E2E/Project_POM/One_nicht_atCC.page.js"
import yourcart from "../../PROJECT_E2E/Project_POM/YourCart.page.js" 
import home from "../../PROJECT_E2E/Project_POM/Home.page.js"
import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"

test("by Author",async({page})=>{
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
    
    //====home======
    let HP=new home(page)
    //click on the desired author
    await HP.author_CB.click()

    //===Byauthor_CB=====
      let CBbooks= new Byauthor_CB(page)
    await CBbooks.SortbyDD.selectOption({value:"price"})
    await CBbooks.bookONaCC.click()

    //===One night book page===
    //add to kart 
    let onenight=new ONaCC(page)
    
    //click on add to cart
     await onenight.ADDTOCART.click()



   //===your cart=======

   //handlig alert (successfully placed)
   await page.once("dialog",async(dialog)=>{
    await dialog.accept()
     let msg= await dialog.message() 
await console.log(msg);

//ASSERTION
await expect(msg).toContain("Order SuccessFully Placed!!")

})
   let YC=new yourcart(page)

   await YC.YCplaceorderbtn.click()
   await YC.YClogoutbtn.click()

    // await page.waitForTimeout(2000)
})