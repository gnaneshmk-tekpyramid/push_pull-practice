import{test,chromium, webkit,firefox} from "@playwright/test"
// // set.viewportsize(w,h)
// test("browsercontrols",async({page})=>{
//    await page.goto("https://www.amazon.in/")
//    page.setViewportSize({width:100,height:600})

//       //viewportsize()
//    console.log(await page.viewportSize()) 

//    //title()
//    console.log(await page.title())

//    //url()
//    console.log(await page.url());
   
// })

// test("",async({browser})=>{
//    let  context =await browser.newContext()
//    let page= await context.newPage()
//    await page.goto("https://www.amazon.in/")
   
//    //context.cookies
//    console.log(await context.cookies())
// })

//chromium.lauch()/webkit.launch()//firefox.context()
test("chromium.launch",async ({browserName})=>{
    let browser= await chromium.launch()
   let context= await browser.newContext() // browser.newcontext
   let page= await context.newPage()
   // browser.close() // ---//closes the instance of the browser immideatly
   await page.goto("https://www.amazon.in/")
console.log(await context.cookies())
console.log(await browserName)
})

// page.screenshot({path})
// test("screenshot",async({page})=>{
// await page.goto("https://www.flipkart.in/")
// await page.screenshot({path:"screenshots/ss1.png"})


// let time =new Date().getTime() //for multiple screenshot
// await page.screenshot({path:`screenshots/-name-${time}.png`})
// })

