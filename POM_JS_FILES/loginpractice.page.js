class loginpractice{
constructor(page){
this.usernameTextField= page.locator("input#username")
this.passwordTextField= page.locator("input#password")
this.submitButton= page.getByRole("button",{name:"Submit"})
}
}
export default loginpractice

