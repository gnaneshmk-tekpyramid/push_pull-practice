class Byauthor_CB{
    constructor(page)
    {
        this.SortbyDD=page.locator("//select[@name='sort']")
        this.bookONaCC=page.locator("//img[@src='img/books/LIT-17.jpg']")
    }
}
export default Byauthor_CB