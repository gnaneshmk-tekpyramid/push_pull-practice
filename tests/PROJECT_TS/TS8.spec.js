import {test,expect} from "@playwright/test"
import landing from "../../PROJECT_E2E/Project_POM/Landing.page.js"
import home from "../../PROJECT_E2E/Project_POM/Home.page.js"
import searchresult from "../../PROJECT_E2E/Project_POM/search_result.page.js"
import Like_aLS from "../../PROJECT_E2E/Project_POM/Likea_Love_song.page.js"
import yourcart from "../../PROJECT_E2E/Project_POM/YourCart.page.js"
import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"



test("back to home in a click",async({page})=>{

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
   //enter a book name
   await HP.Searchboxtf.fill(e2eDATA.Search_bookname)
   //press enter
   await page.keyboard.press("Enter")
   
   //=====Search Result=====
   let SR=new searchresult(page)
   //click on preferred book
   await SR.foundbook.click()

   //====Like a Lovesong page====
    let Like_als=new Like_aLS(page)
    //click on add to cart
    await Like_als.AddtoCart.click()

    //====your cart=====
    let YC= new yourcart(page)

    //handlig alert (successfully placed)
       await page.once("dialog",async(dialog1)=>{
        await dialog1.accept()
         let msg= await dialog1.message() 
        await console.log(msg);
    
        //ASSERTION
        await expect(msg).toContain("Order SuccessFully Placed!!")
        await page.waitForTimeout(3000)
    
    })
    //click on brand button
       await YC.brand.click()


       //assertion======

       //====home=====

       await expect(HP.hellotext).toContainText("Hello")
    //    await page.waitForTimeout(2000)

})