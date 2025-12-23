class homepage{
    constructor(page)
    {
        this.createticketlink = page.locator("//a[.=' Create Ticket']")
        this.viewticketlink = page.locator("//a[.=' View Ticket']")
    }
}

export default homepage