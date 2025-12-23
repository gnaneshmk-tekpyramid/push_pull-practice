

class landingpage{
    constructor(page){
        this.signupbtn=page.locator("//a[.='User Signup']")

    }
    async landing()
    {
       await this.signupbtn.click()
    }

    async assert(page,expect)
    {
       await expect(page).toHaveURL("http://49.249.28.218:8081/TestServer/Build/Small_CRM/")
    }

}
export default landingpage