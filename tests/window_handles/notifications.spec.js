import{test} from "@playwright/test"
test("notifications",async({browser})=>{
let context= await browser.newContext({permissions:["notifications"]})//used to grant permissions 
let page = await context.newPage()
await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
await page.locator("//button[@id='browNotButton']").click()
//checking if the permission is granted or denied
let r = await page.evaluate(()=>{return Notification.requestPermission()})
console.log(`permission status: ${r}`);//granted

// revoking all permissions
await context.clearPermissions()

let r1 = await page.evaluate(()=>{return Notification.requestPermission()})
console.log(`permission status: ${r1}`);//denied

})