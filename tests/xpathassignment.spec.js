import{test} from "@playwright/test"


//1)open amazon search for samsung phones,x path to get the price of the first mobile
// test("samsyng_amazon",async({page})=>{
//    await page.goto("https://www.amazon.in/")
//    await page.locator("//input[@id='twotabsearchtextbox']").fill("samsung phones")
//    await page.locator("//input[@id='nav-search-submit-button']").click()
//    await page.waitForTimeout(3000)
//    let  price=await page.locator("(//span[@class='a-price-whole'])[1]").allTextContents()
//  console.log(price);
//    await page.waitForTimeout(3000)
// })

//2)open amazon search for phones checkbox click android 13
// test("amazon_checkbox",async({page})=>{
//     await page.goto("https://www.amazon.in/")
//     await page.locator("//input[@id='twotabsearchtextbox']").fill("phones")
//     await page.locator("//input[@id='nav-search-submit-button']").click()
//     await page.locator("//span[.='Android 13.0']").click()
//       await page.waitForTimeout(3000)
// })

//3)open cricbuzz ,click on live matcches,click on scorecard,find xpth to find score of perticular batsman
// test("cricbuzz",async({page})=>{
//    await page.goto("https://www.cricbuzz.com/")
//     await page.click('//div[@class="shadow rounded-md overflow-hidden"]/a[@title="England vs Australia, 2nd Test "]')
//     await page.click('//a[.="Scorecard"]')
//     await page.waitForTimeout(1000)
//     await console.log( await page.locator('(//a[text()="Zak Crawley"]/parent::div/following-sibling::div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"])[1]').allTextContents());
//      await page.waitForTimeout(3000)
//     })


// //4)icc batsman ranking(jaiswal)
// test("icc ranking",async({page})=>{
//     await page.goto("https://www.icc-cricket.com/rankings/batting/mens/test")
//     await page.waitForTimeout(2000)
//     await console.log( await page.locator('(//span[text()="Jaiswal"]/ancestor::div[@class="si-table-row"]/descendant::span[@class="si-text"])[1]').allTextContents());
 //   await page.waitForTimeout(3000)
//})



//5) open LensKart application, mouseOverOn StoreLocator, write a xpath to locate (Bangalore)
    
// test("lenskart",async({page})=>{
//     await page.goto("https://www.lenskart.com/?utm_source=google&utm_medium=cpc&utm_campaign=112_in_bau_google_sale_brand_search_lkhome_troas_150119&utm_content=lenskart_exact&gad_source=1&gad_campaignid=1677912364&gbraid=0AAAAADuGjA79jC0VsxZ3_mkBrVBxV8q7B&gclid=Cj0KCQiAi9rJBhCYARIsALyPDtsbIKKQ-M0XOQuHqd2u_8OfUOb-9idU8KAgJSWSbtYvtGgi3fQ73McaAqS-EALw_wcB")
//     await page.hover('//a[text()="Store Locator" and @title="Collection Link" ]')
//     await page.click('//div[text()="Bangalore"]')
// await page.waitForTimeout(3000)
//      })

//6)  open flipkart and locate CART without using visible Text().
    
    //   test("flipkart",async({page})=>{
    //    await page.goto("https://www.flipkart.com/")
    //   await page.click('//a[@title="Cart"]/./child::img')
    // await page.waitForTimeout(3000)
    //   })

//7 )makemytrip departure date


  // test("makemytrip",async({page})=>{
  //      await page.goto("https://www.makemytrip.com/")
  //      await page.waitForTimeout(3000)
  //      await page.locator("//img[@alt='minimize']").click()
  //      await page.locator("//span[@class='commonModal__close']").click()
  //      await page.locator("//span[.='Departure']").click()
  //      await page.locator("(//p[.='24'])[2]").click()
      
  //   await page.waitForTimeout(3000)
  //     })

// 8) tokyo olympics,all athlets  ,medal list, no of gold medals by Emma Mckeon

//  test("olympics",async({page})=>{
//        await page.goto("https://www.google.com/")
//        await page.locator("//textarea[@class='gLFyf']").fill("tokyo olympics")
//        await page.keyboard.press("Enter")
//        await page.locator("//h3[@id='_ebE3acnvG6Wd4-EPlfXy-A4_68']").click()



//     await page.waitForTimeout(3000)
//       })


//9) open amazon.in, mouseover on Accounts & Lists and write a xpath for signInBtn.   

//  test("amazon_signin",async({page})=>{
//  await page.goto("https://www.amazon.in/")
//  await page.hover("//span[contains(.,'Account & Lists')]")
//  await page.locator("//span[@class='nav-action-inner']").hover()
//  await page.waitForTimeout(3000)
// })

//10) open clinique website and inspect bag  

// test("clinique",async({page})=>{
//  await page.goto(" https://www.clinique.in/")
//  await page.locator("//*[local-name()='svg' and @class='ufc-cart-icon-svg']").click()
//  await page.waitForTimeout(3000)
// })

//11)prokabaddi

//  test("prokabaddi",async({page})=>{
//  await page.goto("https://www.prokabaddi.com/")
//  await page.keyboard.press("Enter")
//  await page.waitForTimeout(3000)
//  let pts=await page.locator("//p[@class='name'] | //div[@class='table-data points']/p[@class='count']").allTextContents()
//  console.log(pts);
// await page.locator("//span[.='Teams']").click()
// await page.locator("(//img[@class=' ls-is-cached lazyloaded'])[4]").click()
// await page.waitForTimeout(2000)
// let data=await page.locator("//div[@class='stats-wrap']").allTextContents()
// console.log(data);
//  let data1 =await page.locator("//p[@class='title' and contains(.,'Overall')]/../..").allTextContents()
// console.log(data1);
//  await page.waitForTimeout(3000)
// })

//12)flightbooking dynamic date

// test("makemytripdynamicdate",async({page})=>{
//        await page.goto("https://www.makemytrip.com/")
//        await page.waitForTimeout(3000)
//        await page.locator("//img[@alt='minimize']").click()
//        await page.locator("//span[@class='commonModal__close']").click()
//        await page.locator("//span[.='Departure']").click()
//        let mon="April"
//        let date1=30
//        let count=0
//        if(mon=="January" || mon=="February")
//         {
//        count=1
//         }
//         if(mon=="March" || mon=="April")
//         {
//           count=2
//         }
//         if(mon=="May" || mon=="June")
//         {
//           count=4
//         }
//         if(mon=="July" || mon=="August")
//         {
//           count=6
//         }
//         if(mon=="September" || mon=="October")
//         {
//           count=8
//         }
//         if(mon=="November" || mon=="December")
//         {
//            count=10
//         }
//         for(let i=0;i<=count;i++)
//         {
//           await page.locator("//span[@aria-label='Next Month']").click()
//         }
//         if(mon=='February'||mon=='April' ||mon=='June'||mon=='August'||mon=='October'||mon=='Decemberr')
//           {
//        await page.locator(`(//p[.='${date1}'])[2]`).click()
//         }
//       if(mon=='January'||mon=='March' ||mon=='May'||mon=='July'||mon=='September'||mon=='November')
//         {
//        await page.locator(`(//p[.='${date1}'])[1]`).click()
//         }
//     await page.waitForTimeout(3000)
//       })

////way--2
test("makemytripdynamicdate",async({page})=>{
       await page.goto("https://www.makemytrip.com/")
       await page.waitForTimeout(3000)
       await page.locator("//img[@alt='minimize']").click()
       await page.locator("//span[@class='commonModal__close']").click()
       await page.locator("//span[.='Departure']").click()
       let mon="September"
       let year="2026"
       let day=27
       
     
     for(let i=0;;i++)
     {
       let val= await page.locator(`//div[.='${mon} ${year}']/parent::div[@class='DayPicker-Caption']/following-sibling::div[@class='DayPicker-Body']/div/div/div/p[.='${day}']`).allTextContents()
        if(val[0]!=undefined)
       {
        await page.locator(`//div[.='${mon} ${year}']/parent::div[@class='DayPicker-Caption']/following-sibling::div[@class='DayPicker-Body']/div/div/div/p[.='${day}']`).dispatchEvent("click")
        break
       }
       else{
        await page.locator("//span[@aria-label='Next Month']").click()
       }
      }






        await page.waitForTimeout(3000)
})