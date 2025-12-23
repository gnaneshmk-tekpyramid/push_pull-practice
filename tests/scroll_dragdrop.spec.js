import{test} from "@playwright/test"
// test("scroll",async({page})=>{

//     //----------vertical and horizontal scroll
//     await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
//     await page.waitForTimeout(2000)
//     await page.mouse.wheel(0,2000)//for downscroll
//     await page.waitForTimeout(3000)
//      await page.mouse.wheel(0,-2000)//for upscroll
//      await page.waitForTimeout(3000)
//      await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
//      await page.waitForTimeout(2000)
//     await page.mouse.wheel(2000,0)//for rightscroll
//     await page.waitForTimeout(3000)
//      await page.mouse.wheel(-3000,0)//for leftscroll
//      await page.waitForTimeout(3000)

//      //-----------scroll to a perticular element------------------
//    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
//    await page.waitForTimeout(2000)
//    await page.locator("//input[@type='checkbox']").scrollIntoViewIfNeeded()//to scroll to a perticular element
//    await page.waitForTimeout(3000)
// })

test("drag and drop",async({page})=>{
 //---------drag_drop using mouse actions-----------
  await  page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
   await page.locator("//div[text()='Drag Me']").hover()
   await page.mouse.down()//holding element
   await page.waitForTimeout(3000)
   await page.mouse.move(200,300)//moving element randomly
   await page.waitForTimeout(3000)
   await page.mouse.up()// releasing the element

//--------drag to a perticular position(element)------using mouse_action------------
await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
await page.locator("//div[text()='Mobile Charger']").hover()
await page.mouse.down()
await page.waitForTimeout(3000)
await page.locator("//div[text()='Mobile Accessories']").hover()//moving to a perticular ele
await page.mouse.up()


//--------drag_drop by using element loation--------------
await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
await page.locator("//div[text()='Mobile Charger']").hover()
await page.mouse.down()
await page.waitForTimeout(3000)
let b=await page.locator("//div[text()='Mobile Accessories']").boundingBox()
await page.mouse.move(b.x,b.y)
await page.mouse.up()

await page.waitForTimeout(3000)

//---------------------------dragto()-------------------------------------------

await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
let source=await page.locator("//div[text()='Mobile Charger']")
let target=await page.locator("//div[text()='Mobile Accessories']")

await source.dragTo(target)//drag a source to a target
await page.waitForTimeout(3000) 



})















