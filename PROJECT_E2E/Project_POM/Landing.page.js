import e2eDATA from "../../PROJECT_E2E/Project_TESTDATA/E2Edata.json"
class landing{
    constructor(page)
    {
        this.SignUpbtn=page.locator("//button[@id='register_button']")
        this.Loginbtn=page.locator("//button[@id='login_button']")
        this.SuUSNtf=page.locator("//input[@name='register_username']")
        this.SuPWDtf=page.locator("//input[@name='register_password']")
        this.SuSIbtn=page.locator("//button[@name='submit' and @value='register']")
        this.LiUSNtf=page.locator("//input[@name='login_username']")
        this.LiPWDtf=page.locator("//input[@name='login_password']")
        this.LiSIbtn=page.locator("//button[@value='login']")
        
        
    }

   async SUclick(LP){
    await LP.SignUpbtn.click()
   }
   async SUUNtffill(LP){
    await LP.SuUSNtf.fill(e2eDATA.signupUN)
   }
   async SUpwdfill(LP){
    await LP.SuPWDtf.fill(e2eDATA.signupPWD)
   }
   async clickSUbtn_assert(LP,page){
    page.once("dialog",async(dialog)=>{
        await dialog.accept()        //handling alertpopup
        let msg= await dialog.message()
        console.log(msg);
    })
    //click on SI btn
    await LP.SuSIbtn.click()
   }

   async LOGINprocess_assertlogin(LP,page){
    
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
   }
}
export default landing