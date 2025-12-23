import{test,expect} from "@playwright/test"
test("frames",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")
//await page.locator("//input[@name='mytext1']").fill("aaaaaaaaaaa")----cant access directly and fill as it is in a different frame

//--------------accessing and handelinng frames----------------------------------
let frame=await page.frames() //to get all frame objects
console.log(frame.length);//to get count of frames

for(let fr of frame)
    {
        console.log(await fr.title());
    }


    //=======taking frame access========-A1-page.frame()===============

    let frame_1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})//taking access of the frame

await frame_1.locator("//input[@name='mytext1']").fill("aaaaaaaaaaaaaaa")//now text is filled as the frame is accessed
await expect.soft(await frame_1.locator("//input[@name='mytext1']").inputValue()).toContain("aaa")
console.log("hi");

    //=======taking frame access========-A2-page.framelocator()===============

//    let f4= await page.frameLocator('//frame[@src="frame_4.html"]')
//   await f4.locator("//input[@name='mytext4']").fill("sssssssssss")
let tff4= await page.frameLocator('//frame[@src="frame_4.html"]').locator("//input[@name='mytext4']")//directly locating a textfield on a frame and storing its address
await tff4.fill("ssssssssssssss")

//========taking frame access=====A3-using normal locator() //contentframe()========
let f2=await page.locator('//frame[@src="frame_2.html"]').contentFrame()
await f2.locator("//input[@name='mytext2']").fill("sssssssssssssssssss")

//=========nested frame=======================================

let f3= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
let if1= await f3.frameLocator("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']")
let ttf= await if1.locator("(//div[@class='rq8Mwb'])[1]")
await ttf.click({force:true})






await page.waitForTimeout(3000)
})