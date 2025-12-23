import {test} from "@playwright/test"
 
//-------------------autowaits----------------------------------------------------------------------
// test.use({actionTimeout:3000})//to change the default autowait from 30 to 3 in all testblocks globally

// test("auto-waits",async({page})=>{
//     page.setDefaultTimeout(5000) //to change the 30 sec default autowait to 5 sec for the perticular test
// await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
// await page.locator("//input[@type='radio' and @value='standard']").check()//testing 30 sec inbuilt wait
// await page.locator("#username").fill("Ajay R",{timeout:2000})//to set a timeout for a perticular method
// await page.waitForTimeout(3000)
// }) 

//------------------------hard coded waits--------------------------------------------------------
// test("hardcode wait",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
//     await page.waitForTimeout(2000)//adding 2 sec pause to the script 
//     await  page.locator("#email").fill("ajayr@abc.com")
//     await page.waitForTimeout(2000)//adding 2 sec pause to the script regardless the elements load or not
//     await page.getByLabel("Password:").fill("ajay@2000")
// })


// test("autosuggestions",async ({page}) => {
// await page.goto("https://www.amazon.in/")
// await page.locator("//input[@id='twotabsearchtextbox']").fill("playstation")
// await page.waitForTimeout(3000)//alltextcontent() doesnot have autowaiting ,it returns [],to avoid we use hardcode wait
// let allt = await page.locator("//div[@role='row']").allTextContents()
// console.log(allt);
// await page.waitForTimeout(3000)
// })

//------------Explicitwaits------------------------------------

//-------------element based--------------------------------

// test("ExplicitWaits",async({page})=>{

//     await page.goto("https://www.amazon.in/")
//     await page.locator("//input[@id='twotabsearchtextbox']").waitFor({state:"visible"})//waits till the state is visible
//     await page.locator("//input[@id='twotabsearchtextbox']").fill("playstation 5")
//     await page.waitForSelector("//a[@id='nav-logo-sprites']",{state:"visible"})
//     await page.locator("//div[@role='row']",{hasText:"controller"}).waitFor({timeout:3000})//esitd until the mentionned text appears on the webpage
//     let sugg= await page.locator("//div[@role='row']").allTextContents()
//     console.log(sugg);
//   await page.waitForTimeout(3000)
// })


//------------------------pagebased---------------------------------

//test("pagebased",async({page})=>{
// await page.goto("https://www.amazon.in/")
// //navigation--by default load state
// await Promise.all([        //using promise to make the navigation line and the code of navigation parallely
//     page.waitForNavigation(),  //waits from the start to end of the url or page navigation
//     page.click("//span[@id='nav-cart-count']")
// ])
// //await page.click("//span[@id='nav-cart-count']")
// //waitforloadstate--by default waits for load without parameters
// await page.waitForLoadState("domcontentloaded",{timeout:3000})//waits until the html structure loads in the navigated page
// await page.waitForTimeout(3000)
// })

//---waitforevent()
test("event",async({browser})=>{
await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
await page.locator("//textarea[@id='writeArea']").fill("test data for downloading text")

let [downoad_details]=await Promise.all([

    page.waitForEvent("download"),
    page.locator("#downloadButton").click()
])
console.log(await downoad_details.path());


await page.waitForTimeout(3000)
})


//-------------Custom waits-----------------------

// test("",async({page})=>{

//    await page.goto("https://www.amazon.in/")

//    let ff=await page.waitForFunction(()=>{return document.readyState==="complete"})
//    await page.locator("//input[@id='twotabsearchtextbox']").fill("playstation 5") 

// //   await page.waitForFunction(()=>{let elem=document.querySelectorAll("[role='row']")
// //     return elem.length>2
// //   })
// console.log(ff);
//   await page.waitForTimeout(3000)
// //    let atc=await page.locator("//div[@role='row']").allTextContents()
// //    console.log(atc);
// })
