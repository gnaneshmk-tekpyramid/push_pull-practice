import { test } from '@playwright/test';

// test('test', async ({ page }) => {
//    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
//   await page.getByLabel("email").fill("abc@gmail.com")
//   await page.getByPlaceholder("Enter your full name").fill("qwertyuiop")
//   await page.getByText("getByText()").click()
//   await page.getByAltText("logo image").click()
//   await page.getByTitle("Home page link").click()
//   await page.getByRole("radio",{name:"standard"}).click()
//   await page.getByTestId("product-card-1").click()
//==========================================================================================
  
//   let it=await page.locator("//section[@id='title-locators']/h2/span").innerText()
//    console.log(it);
// let itt=await page.locator("//section[@id='title-locators']").textContent()
//    console.log(itt);

// let allit=await page.locator(".highlight").allInnerTexts()
//   console.log(allit);
//   let alltc=await page.locator(".highlight").allTextContents()
//   console.log(alltc);



//   await page.waitForTimeout(3000)
// });

// test("practices",async({page})=>{
// await page.goto("https://www.flipkart.com/")
// await page.getByPlaceholder("Search for Products, Brands and More").fill("mobile")
// await page.locator("//div[@class='YGcVZO _2VHNef']",{hasText:"mobile 4g"}).waitFor({timeout:4000})


// let sa=await page.locator("//div[@class='YGcVZO _2VHNef']").allTextContents()
// console.log(sa);
// })

test("handlingnewtabs",async({browser})=>{
let context= await browser.newContext()
let page= await context.newPage()
 let p2=page.waitForEvent("popup")
await page.goto("https://www.flipkart.com/search?q=playstation%205&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
  
   await  page.click("(//img[@class='UCc1lI'])[1]")
  let npage=await p2
    await npage.waitForTimeout(2000)
     await npage.locator("//input[@class='Vy9RSP']").fill("2222222222")
     
 await npage.waitForTimeout(2000)
})