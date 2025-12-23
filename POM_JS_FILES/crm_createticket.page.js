class createticket{
    constructor(page){
        this.subjectTf=page.locator("#subject")
        this.tasktypedd=page.locator("//select[@name='tasktype']")  
        this.prioritydd= page.locator("//select[@name='priority']")
        this.descriptionTA = page.locator("//textarea[@name='description']")
        this.sendbtn= page.locator("//input[@name='send']")

    }
    
}
export default createticket