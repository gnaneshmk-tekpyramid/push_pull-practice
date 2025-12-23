import {test,expect} from "@playwright/test"

//--------------------------------------------------------------------------------------------
//----------------Retrying assertions------------------------------------------------------
//-----------------------------------------------------------------------------------------
// test("practice",async({page})=>{
  //------------toHaveTitle()---------
//     await page.goto("https://www.naukri.com/")
//     await expect(page).toHaveTitle("Jobs - Recruitment - Job Search - Employment - Job Vacancies - Naukri.com")
//       await page.locator("//a[@title='Jobseeker Register']")

//-----------------toHaveID-------
//       await expect(page.locator("//a[@title='Jobseeker Register']")).toHaveId("register_Layer")
//       await page.locator("//a[@title='Jobseeker Register']").click()
     
//----------------------toHaveValue()---------
//       await expect(page.locator("//input[@placeholder='What is your name?']")).toBeVisible()
//       await page.locator("//input[@placeholder='What is your name?']").fill("Ajay R")
//       await expect(page.locator("//input[@placeholder='What is your name?']")).toHaveValue("Ajay R")
      
    // await page.waitForTimeout(2000)
//})

// test("dempqspqsp",async({page})=>{

//   //---------tohaveURL()-------------
//    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0");
//     await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox?sublist=0")

//    //---------tobechecked()--------- 
//    let cb=  await page.locator("#domain_a")
//   await cb.click()
//   await expect(cb).toBeChecked()

// //-----------tohavetext()-----------
//   let ct=await page.locator(`(//span)[position()>1 and position()<5] `)
//   await expect(ct).toHaveText(["Email","WhatsApp","Message"])

//   //-----------tohaveattribute()----
//   let tha = await page.getByRole("link",{name:"Web Table"})
//   await expect(tha).toHaveAttribute("class","pe-1 py-1 font-semibold flex items-center justify-between w-full text-sm whitespace-nowrap ps-3 flex-wrap hover:no-underline active:no-underline focus:no-underline text-black")
//   await expect(tha).toHaveAttribute("class")

//   //-----------tohaveid()--tohaveclass()
//   let ghj =await page.locator("#domain_b")
//   await ghj.click()
//   await expect(ghj).toHaveId("domain_b")
//   //await expect(ghj).toHaveClass("")


// await page.waitForTimeout(2000)
// })


//----------------------------------------------------------------------------
//---------------------nonretrying assertions---------------------------------
//---------------------------------------------------------------------------

// test("",async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

// //----------------toBe()------.not.----.soft()--------expect(,custom msg)-------------------
// let innt=await page.locator("//span[@style='color: red']").innerText()
// console.log(innt);
// expect(innt).toBe("colored text")//toBe(),a assertion to check if the returned value matches
// //expect(innt,"returned text do not match").toBe("colored text ")//a assertion with a custom message 
// expect(innt).not.toBe("colored")//negative assertion , checkes the passed content should not be present 

// expect.soft(innt).toBe("colored text")//softassertion,doesnot stop the execution but fails the test
// await page.locator("#username").fill("Ajay R")

// //-----------------toBeclose()-------------------------------------------
// await page.locator("#Wikipedia1_wikipedia-search-input").fill("56")
// let innert=await page.locator("#Wikipedia1_wikipedia-search-input").inputValue()
// await expect(Number(innert)).toBeCloseTo(55.999,1)////(input-expected)<10^precision

// //-----------------tobefalsy()-------tobedefined()-----------------------------------------
// let ab=await page.locator("//p[@data-testid='product-price']").first().innerText()
// console.log(Number(ab));
// await expect(Number(ab)).toBeFalsy()//checks for null/0/''/false
// await expect(ab).toBeDefined()//checkes if the value is undefined

// await page.locator(".wikipedia-search-input").fill("22")
// let ad=await page.locator(".wikipedia-search-input").inputValue()
// await expect(Number(ad)).toBeGreaterThan(21)

// await page.waitForTimeout(3000)
// })



//-----------------------------------------------------------------------------------------
//----------------------------Assymetric-waits------------------------------------------=
//------------------------------------------------------------------------------------------

test("",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

 await page.locator("#email").fill("gnaneshmk08051993@gmail.com")
 let iv=await page.locator("#email").inputValue()
 console.log(iv);

expect(iv).toEqual(expect.any(String))//checkes datatyoe
expect(iv).toEqual(expect.anything())//accepts anything but null amd undefined

let arr=["gnanesh","ajay","keerthan","girish"]
 expect(arr).toEqual(expect.arrayContaining(["ajay","gnanesh"]))//it checks the values are present in the returned array
//  expect(arr).toEqual(expect.arrayOf([String,String,String]))// not working

let obj={
 a:1,
 b:2,
 c:3,
 d:4
}

expect(obj).toEqual(expect.objectContaining({a:expect.any(Number)}))


 })