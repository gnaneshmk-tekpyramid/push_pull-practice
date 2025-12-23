import {test} from "@playwright/test"
import  fs, { Utf8Stream }  from "fs"
import path from "path"
test("upload",async ({browser}) => {
    let context= await browser.newContext()
    let page= await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
   
//====================from project folder======================================================
   
    //=======upload single file========
    await page.locator("//input[@id='singleFileInput']").setInputFiles("E:/aplaywright/upload_download/uploadtest.txt") //specifying the path of he file to be uploaded
    await page.getByRole("button",{name:"Upload Single File"}).click()

    //=======upload single file sing dir name and relativepath========
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='singleFileInput']").setInputFiles(path.join(__dirname,"../../upload_download/upload_dirpath.txt"))
    await page.getByRole("button",{name:"Upload Single File"}).click()
    
    //========upload multiple files=================================
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["E:/aplaywright/upload_download/multiple2.xlsx",path.join(__dirname,"../../upload_download/multiple1.txt")])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(3000)

//=========================from local system=====================================

     //=======upload single file========
    await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/Gani/Desktop/localsysuploadtest.txt") //specifying the path of he file to be uploaded
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.waitForTimeout(3000)
   
    //========upload multiple files=================================
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["C:/Users/Gani/Desktop/localsysexcelupload.pub","C:/Users/Gani/Desktop/localsysuploadtest.txt"])
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    await page.waitForTimeout(3000)

//===========================to unselect selected files===================
  
    await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/Gani/Desktop/localsysuploadtest.txt") //specifying the path of he file to be uploaded
    await page.locator("//input[@id='singleFileInput']").setInputFiles([])//unselecting the selected files
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.waitForTimeout(3000)
    
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["C:/Users/Gani/Desktop/localsysexcelupload.pub","C:/Users/Gani/Desktop/localsysuploadtest.txt"])
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([])//unselecting the selected files
    await page.getByRole("button",{name:"Upload Multiple Files"}).click()
   
})

test.only("download",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("i am a downloadable file")
   let [downloaddetails] =await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button",{name:"Download"}).click()  //clickinng on download
        ])
    let filename = downloaddetails.suggestedFilename() //giving the filename
    let downloadloc="E:/aplaywright/download_test" //specifying the path
    await downloaddetails.saveAs(path.join(downloadloc,filename)) //saving it in the actual path
    console.log(await downloaddetails.path());
    //download to local system
 await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("i am a downloadable file")
   
       let dd= page.waitForEvent("download")
       await page.getByRole("button",{name:"Download"}).click()  //clickinng on download
       await page.locator("#fileName").fill("testing.txt")
       let downd=await dd
       let loc="C:/Users/Gani/Desktop/playwrighttestdownload"
       let name=downd.suggestedFilename()
       console.log(name);
       let fp=path.join(loc,name)
       await downd.saveAs(path.join(loc,name))
       
       ////verifying
       if(fs.existsSync(fp))
       {
        console.log(`file exists at :${fp}`);
        
       }
       else{
        console.log("file doesnot exist");
       }
    let data= fs.readFileSync(fp,"utf-8")
    console.log(data);
    fs.writeFileSync(fp,"I am ajay")
    let data1= fs.readFileSync(fp,"utf-8")
    console.log(data1);
     await page.waitForTimeout(3000)
})