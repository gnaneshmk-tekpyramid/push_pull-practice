class home{
    constructor(page){
        this.headingtxt=page.locator("//a[@class='btn btn-lg' and contains(.,'Hello')]")
        this.hpLogoutbtn=page.locator("//a[@class='btn btn-lg' and contains(.,'LogOut')]")
        this.hpChildern_teenlink=page.locator("//a[contains(.,'Children')]")
        this.author_CB=page.locator("//img[@src='img/popular-author/1.jpg']")
        this.book_like_aLS=page.locator("//img[@src='img/new/1.jpg']")
        this.AskQuerybtn= page.locator("//button[@id='query_button']")
        this.AQyourname=page.locator("//input[@name='sender']")
        this.AQemail=page.locator("//input[@type='email']")
        this.AQquerytf=page.locator("//textarea[@class='form-control']")
        this.AQsendquerybtn=page.locator("//button[@value='query']")
        this.Searchboxtf= page.locator("//input[@name='keyword']")
        this.hellotext=page.locator("(//a[@href])[2]")
        this.cart=page.locator("//a[@href='cart.php']")
    }
    async homelogoutbtnclick(HP){
         await HP.hpLogoutbtn.click()
    }
}
export default home