import{test,expect} from "@playwright/test"
test("creating newtabs",async({browser})=>{

    //----creating multiple tabs manually----
let context = await browser.newContext()
let page= await context.newPage()
// await page.goto("https://www.flipkart.com/")
// let page2= await context.newPage()
// await page2.goto("https://www.amazon.in/")

 //---handling new tabs via user interactions----

await page.goto("https://www.flipkart.com/search?q=playstation%205&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
await page.click("(//img[@class='UCc1lI'])[1]")
console.log(await page.url());

await page.goto("https://www.redbus.in/")
await page.click("//a[.='Contact us']")
await page.waitForTimeout(2000)
})
///============handling multipple tabs=================

test.only("handlingnewtabs",async({browser})=>{
let context= await browser.newContext()
let page= await context.newPage()
await page.goto("https://www.flipkart.com/search?q=playstation%205&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")

let [page2]=await Promise.all([     ///handling multiple tabs
    page.waitForEvent("popup"),
    page.click("(//img[@class='UCc1lI'])[1]")])

    
await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=playstation%205&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")//accessing the new tab

//example--2------------------------

await page.goto("https://www.redbus.in/")

let [page3]=await  Promise.all( ////handling the new tab 
    [page.waitForEvent('popup'),
     page.click("//a[.='Contact us']")
    ]
)
await page3.click("//span[.='Account']")//accessing the nnew tab
await page2.waitForTimeout(3000)
})

//==============Multiple windows=====================================
test.only("multiplewindiws",async({browser})=>{
   let context= await browser.newContext()
   let page= await context.newPage()
   await page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")
    let [window]=await Promise.all([        ///creating a new window
        page.waitForEvent("popup"),
    page.click("//button[.='Shop Now']")

    ])
   await expect(window.title()).not.toBe(page.title())
   await window.click("//button[.='Add to Cart']")     //accessing the new window 
   await window.waitForTimeout(3000)
})





