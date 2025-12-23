class yourcart{
    constructor(page){
        this.YCplaceorderbtn=page.locator("//a[contains(.,'Place Order')]")
        this.YClogoutbtn=page.locator("//a[contains(.,'LogOut')]")
        this.continueshoppingbtn=page.locator("//a[contains(.,'Continue')]")
        this.Removebtn=page.locator('//*[@id="cart"]/div[2]/div[2]/div[2]/a')
        this.brand= page.locator("//img[@alt='Brand']")
    }
}
export default yourcart