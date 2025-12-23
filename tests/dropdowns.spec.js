import{test} from "@playwright/test"
test("dropdown",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     await page.locator("#select3").click()

//     //======selectoption(value/label/visibletext/index)===========================
// await page.locator("#select3").selectOption({value:"India"}) //select by value
// await page.waitForTimeout(2000)
// await page.locator("#select3").selectOption({label:"Germany"})//by label(visible text)
// await page.waitForTimeout(2000)
// await page.locator("#select3").selectOption({index:5})//by index
// await page.waitForTimeout(2000)
// await page.locator("#select3").selectOption("India")//by visible text ,it checks for value first
// await page.waitForTimeout(3000)


// //=================multiple select===============================

// await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")

// await page.locator("#select-multiple-native").selectOption([{value:"Mens Casual Premium Slim Fit T-Shirts "},{value:"Opna Women's Short Sleeve Moisture"}])
// await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()
// await page.waitForTimeout(2000)

// await page.locator("#select-multiple-native").selectOption([{index:14},{index:9}])
//  await page.locator("//button[@class='bg-orange-500 p-2 text-white rounded w-[150px]']").click()


//============custom dropdowns===================================

await page.goto("https://www.amazon.in/s?k=shoes&crid=2J3RQHBTFYHMQ&sprefix=shoes%2Caps%2C286&ref=nb_sb_noss_2")
await page.locator("//span[@class='a-button-text a-declarative']").click()

// //---using names(text) and itterating
// await page.locator("//a[@class='a-dropdown-link']").first().waitFor()
// let opt=await page.locator("//a[@class='a-dropdown-link']").all()
// for(let op of opt)
// {
//     let text=await op.textContent()
//     if(text.includes("Best S"))
//     {
//         await op.click()
//     }
// }

//-----using xpath          
// await page.locator("#s-result-sort-select_1").click()
//---variable attached to xpath
let text="Price: High to Low"
await page.locator(`//a[@class='a-dropdown-link' and text()="${text}"] `).click()


 await page.waitForTimeout(2000)
})