import {test} from "@playwright/test"
test("basicmouseactions",async({page})=>{
// //------------clik()---------------------
// await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
// await page.locator("//a[.='Right Click']").click() //default left click
// await page.locator("//a[.='Right Click']").click({modifiers:["Shift"]}) //shift+click

// //-------------rightclick-----------------------------------
// await page.locator("//button[@id='btn_a']").click({button:"right"})
// await page.locator("//a[.='Double Click']").click()

// //-----------doubleclick----------------------------------
// await page.locator("//button[@id='btn_a']").dblclick()
// //await page.locator("//button[@id='btn_a']").click({clickCount:2})// acheiving doubleclick by click()

// //-------down_up ----------------------------------------
// await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
// await page.locator("#circle").hover()//used to move curser
// await page.mouse.down()//for press an hold
// await page.waitForTimeout(3000)//explicit time for mouse hold
// await page.mouse.up()//to release the pressed mouse key

////-------------------------forceclick--------------------
// await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
// await page.locator("#submit").click({force:true})//for disabled por hidden ele or overlapping ele
//await page.locator("#submit").dispatchEvent("click")

// //------------------hover----------------------
// await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
// await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover()
// await page.waitForTimeout(8000)

// //------------------move------------------------
// await page.mouse.move(100,200)//to move curser for a perticular position


await page.waitForTimeout(3000)
})