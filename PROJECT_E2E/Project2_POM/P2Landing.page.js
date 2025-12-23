class P2_landing{
    constructor(page)
    {
       this.logintf=page.locator("//input[@id='email']")
       this.password=page.locator("//input[@id='password']")
    }
}
export default P2_landing