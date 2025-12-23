import{test} from "@playwright/test"

test("",async({page})=>{

//  await page.goto("http://106.51.82.61:9007/")
// //    -------fill()//used to fill values to text fields
//  await page.getByRole("textbox",{name:"email"}).fill("mark15@gmail.com")

// //    -------type()//used to fill char by char
//    await page.locator("#password").type("123456")

// //    /-------click()//used to click a button
//  await page.locator("//button[@type='submit']").click()

 //----------innertext()//to get visible text
//    let innert =await page.locator(".panel-title").innerText()
//    console.log(innert);

//------------textcontent()//to get visible text + hidden text
//     let tcont =await page.locator(".panel-title").textContent()
//    console.log(tcont);
//-------------inputvalue()//to get value of user input
//      let it= await page.getByRole("textbox",{name:"email"}).inputValue()
//      console.log(it);

//  -------------alltextcontents()//used for multiple elements
//     await page.locator(".fc-day-number").first().waitFor()
//    let alltc = await page.locator(".fc-day-number").allTextContents()
//     console.log(alltc);

//   //----------getAttribute()//to get att-value from att-name
  await page.goto("https://testautomationpractice.blogspot.com/")
//  let att= await page.locator("#male").getAttribute("type")
//  console.log(att);

//  //---------all()//returns array for selector with multiple matches
//  //we need to use waitfor() if it returns an empty array as playwright does not wait for the elements to load
//     let allel=await page.locator("//input[@type='checkbox']").all()
//     console.log(allel);
 
//     //---------isVisible()--returns boolean
//    let tof= await page.locator("#male").isVisible()
//    console.log(tof);

//    //---------isEnabled()--returns boolean
//    let enorno= await page.locator(".rectangular-button").first().isEnabled()
//    console.log(enorno);

//    //---------isDisabed()--returns boolean
//    let eon= await page.locator(".submit-btn").first().isDisabled()
//    console.log(eon);

//    //---------isEditable()--returns boolean (input,textarea,dropdowns only)
//    let en= await page.locator("#tuesday").isEditable()
//    console.log(en);

//     //---------isChecked()--returns boolean )(for rdio or check box)
//     let rr=await page.locator("#wednesday").isChecked()
//     console.log(rr);


//----------waitfor() //used to explicitly make the script wait until a condition is satisfied 

await page.locator("#tuesday").waitFor({state:"visible",timeout:2000})
   await page.waitForTimeout(3000)
})