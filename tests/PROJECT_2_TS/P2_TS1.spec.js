//login as patient, raise a appointment request ,login as doctor and accept the appointment check in pending appointment list

import {test} from "@playwright/test"
import P2_landing from "../../PROJECT_E2E/Project2_POM/P2Landing.page.js"


test("",async({page})=>{
await page.goto("http://106.51.82.61:9007/")
//=======landing page==========
let P2_LP= new P2_landing(page)
  




})