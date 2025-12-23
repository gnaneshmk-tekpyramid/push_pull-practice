import{test} from "@playwright/test"
test("getbymethods",async({page})=>{
   // await page.goto("https://demo.nopcommerce.com/login")
    //-----Label----
   // await page.getByLabel("Emai",{exact:false}).fill("ninjabynny@gmail.com")//by default accepts partialtext
    //---------Placeholder-------
   // await page.getByPlaceholder("Search st").fill("computer")//by default accepts partialtext
    //--------Text-------
   // await page.getByText("Search").first().click()
    //---------AltText---------
   // await page.getByAltText("nopCommerce demo").click()
//    ----------Title--------------
   await page.goto("https://demo.nopcommerce.com/electronics")
//   await page.getByTitle("Show products in category Camera & photo",{exact:true}).first().click()
//    /--------Role(ARIA role-accessable rich internet application)----
//   await page.getByRole("link",{name:" Others "}).nth(1)?.click()

   

//--------Testid()---------------------------
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("login-password").click()

 await page.waitForTimeout(2000)
})