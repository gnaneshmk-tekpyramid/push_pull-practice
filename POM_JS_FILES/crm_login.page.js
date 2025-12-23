class crmloginpage{
    constructor(page){
        this.emailid=page.locator("#txtusername")
        this.password=page.locator("#txtpassword")
        this.loginbtn= page.locator("//button[@name='login']")
    }

}
export default crmloginpage