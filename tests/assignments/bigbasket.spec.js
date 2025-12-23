import {test} from "@playwright/test"
test("bigbasket",async({page})=>{
await page.goto("https://www.bigbasket.com")
await page.locator("//button[@id='headlessui-menu-button-:Ramkj6:']").click()
let s1=await page.locator("(//ul[@class='jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth']/li/a)[position()>17]").allTextContents()
let ind=1
for(let i=0;i<s1.length;i++)
{   await page.hover(`((//ul[@class='jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth']/li/a)[position()>17])[${Number(ind)}]`)
   let inner=await page.locator(`((//ul[@class='jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth']/li/a)[position()>17]/../../li)[1]/../following-sibling::ul[@class='jsx-1259984711 w-56 px-2.5 bg-silverSurfer-200 text-darkOnyx-800 max-h-120 overflow-y-auto scroll-smooth']/li`).allTextContents()
 for(let ele of inner)  {
        await page.hover(`((//ul[@class='jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth']/li/a)[position()>17]/../../li)[1]/../following-sibling::ul[@class='jsx-1259984711 w-56 px-2.5 bg-silverSurfer-200 text-darkOnyx-800 max-h-120 overflow-y-auto scroll-smooth']/li/a[text()="${ele}"]`)
       let innermost=await page.locator(`(//ul[@class='jsx-1259984711 w-56 px-2.5 bg-darkOnyx-800 text-silverSurfer-100 rounded-l-xs max-h-120 overflow-y-auto scroll-smooth']/li/a)[position()>17]/../../../../nav/ul/following-sibling::ul[@class='jsx-1259984711 w-56 px-2.5 bg-white text-darkOnyx-800 rounded-r-xs max-h-120 overflow-y-auto scroll-smooth']/li/a`).allTextContents()
    console.log(innermost);  }
    ind++}      })

