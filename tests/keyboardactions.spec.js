import{test} from "@playwright/test"
// test("keyboard",async({page})=>{

//    await page.goto("https://demoapps.qspiders.com/ui")
//    //---------type-----------
//   /*type 1*/  await page.locator("#name").type("Gnanesh")
//   /*type 2*/  await page.type("#name"," M ")
//   /*type 3*/  await page.locator("#name").click()
//               await page.keyboard.type("Killedar")
   
//  //---------innertext()-----------
//   await page.locator("#name").click()
//   await page.keyboard.insertText(" Mysore ")
   

// //-------down and up----------------
// await page.keyboard.down("Space")
// await page.keyboard.up("Space")
// await page.keyboard.down("K")
// await page.keyboard.up("K")

// //----------press()-------------

// await page.keyboard.press("Tab")
// await page.keyboard.type("abc@gmail.com")
// await page.keyboard.press("Control+a")
// await page.keyboard.press("Control+c")
// await page.keyboard.press("Tab")
// await page.keyboard.press("Control+v")



//   await page.waitForTimeout(2000)
// })


//------------scrolling using keyboard--------------------------
test("Scrolling",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.keyboard.press("ArrowDown")

    for (let index = 0; index < 15; index++) {
         await page.keyboard.press("ArrowDown")
        
    }
    for (let index = 0; index < 10; index++) {
        
         await page.keyboard.press("ArrowUp")
    }

    await page.waitForTimeout(2000)
})