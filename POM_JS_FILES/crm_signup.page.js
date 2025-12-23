class signuppage{
    constructor(page){
        this.name= page.locator("#name")
        this.email= page.locator("#email")
        this.password= page.locator("#password")
        this.re_password= page.locator("#cpassword")
        this.contactno= page.locator("#txtpassword")
        this.malegenderbtn= page.locator("//input[@value='m']")
        this.femalegenderbtn= page.locator("//input[@value='f']")
        this.submitbtn= page.locator("//input[@value='Submit']")

    }
}
export default signuppage