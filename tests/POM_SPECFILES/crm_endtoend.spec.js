import {test,expect} from "@playwright/test"
import landingpage from "../../POM_JS_FILES/crmlandingpage.page.js"
import signuppage from "../../POM_JS_FILES/crm_signup.page.js"
import crmloginpage from "../../POM_JS_FILES/crm_login.page.js"
import homepage from "../../POM_JS_FILES/crm_home.page.js"
import createticket from "../../POM_JS_FILES/crm_createticket.page.js"
import datacrm from "../../POM_test_data/cmr_testdata.json"



test("CRM_e2e",async({page})=>{
    //===landing_page======
     //launch url
    await page.goto(datacrm.url)
      let landingp=new landingpage(page)
 // asserting the lading page is displayed
     landingp.assert(page,expect)  //assertin method called

    //click on signin btn 
       landingp.landing()  //accessing methods from testdata(POMclass)
     
     
     
       //======signup========
    let signupp=new signuppage(page)
    //enter name tf
    await signupp.name.fill(datacrm.signup_name)
    //enter email_id tf
    await signupp.email.fill(datacrm.signup_email)
    //enter password tf 
    await signupp.password.fill(datacrm.signup_paswd)
    //enter password again tf
    await signupp.re_password.fill(datacrm.signup_repswd)
    //enter contact tf
    await signupp.contactno.fill(datacrm.signup_contactno)
    //select gender radio btn
    await signupp.femalegenderbtn.check()
     //handle alert popup ---read msg //==handling the alert before the event
    await page.waitForTimeout(2000)
   page.once("dialog",async(dialog)=>{await dialog.accept()
   let alertmsg= await dialog.message()
   await console.log("alert message: "+alertmsg);})
    //click on submit btn
    await signupp.submitbtn.click()
   
   
    //===========login===========
    let loginp=new crmloginpage(page)
    //enter email-id tf
    await loginp.emailid.fill(datacrm.login_email)
    //enter password tf
    await loginp.password.fill(datacrm.login_pwd)
    //click on login btn
    await loginp.loginbtn.click()

    
    //========home==============
    let homep=new homepage(page)
    //click on create ticket link
    await homep.createticketlink.click()
    

    //=======create_ticket=======
    let createticketp=new createticket(page)
    //enter subject tf
    await createticketp.subjectTf.fill(datacrm.createTSubject)
    //select tasktype dd
    await createticketp.tasktypedd.selectOption({value:"billing"})
    //select priority dd
    await createticketp.prioritydd.selectOption("Important")
    //enter descritpion tafa
    await createticketp.descriptionTA.fill(datacrm.creatTDesc)
    //handle a alert --read msg //ghandling before click because we need the alert trigger
    await page.once("dialog",async(dialog)=>{dialog.accept()
     let alertmsg2= await dialog.message()
     console.log("alert message2- :"+alertmsg2);
    })
     //click on send btn
    await createticketp.sendbtn.click()
    
    //click on view ticket[home]
     await homep.viewticketlink.click()
   
    //====view ticket=====
    //take screenshot
    let date=new Date()
    let time=date.getTime()
    console.log(time);
    await page.screenshot({path:`E:/aplaywright/POM_SS/crm_ticket_${time}.png`})
    
  

await page.waitForTimeout(2000)

})