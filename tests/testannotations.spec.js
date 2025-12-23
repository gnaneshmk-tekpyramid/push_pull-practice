 //test.skip

// import{test} from "@playwright/test"
// test("test1",async()=>{
//     console.log("test 1 executed");
// })

// test("test2",async({browserName})=>{
//     test.skip(browserName!="firefox") //conditional skip if(not firefox than skip)
//     {
//     console.log("test 2 executed");
//     }
// })

// test.skip("test3",async()=>{ ////complete test block skip
//     console.log("test 3 executed");
// })
//console.log("===========================================");

//test.only

// import{test} from "@playwright/test"
// test("test1",async()=>{
//     console.log("test 1 executed");
// })
// let n=1
// if(n<=2){
// test.only("test2",async({browserName})=>{ ///skips the rest of the code and only executes the present line
    
//     console.log("test 2 executed");
    
// })
// }

// test("test3",async()=>{ 
//     console.log("test 3 executed");
// })
// console.log("=======================================");

// //test.fail

// import{test} from "@playwright/test"
// test("test1",async({page})=>{ 
//     console.log("test 1 executed");
//    test.fail(await page.goto("iiibhibihbihbi")) //we expect a test to fail...if it fails returens true else false
// })
//console.log("===============================");



//test.fixme && test.slow

// import{test} from "@playwright/test"
// test("test1",async()=>{
//     test.slow()                      ////test.slow() gives 3x more execution / waiting time
//     console.log("test 1 executed");
// })

// test("test2",async({browserName})=>{ ////expects a code mistake and test.fixme skips it similar to skip
//    test.fixme(browserName==="chromium")
//    {console.log("test 2 executed")}
//    console.log("test 2 execution outside fixme");
// })

// test("test3",async()=>{ 
//     console.log("test 3 executed");
// })
//console.log("==================================");

//test.describe && test.setTimeout


import{test} from "@playwright/test"

test.describe("describe_grouping",()=>{ /////describe only used to group the tests 
    test("test1",async({page})=>{             //for example describe login, tests are valid cred and invalid cred
  console.log("test 1 executed");          // for testng
  await page.goto("https://www.amazon.in/")                                            
})

test("test2",async()=>{
   test.setTimeout(5000)             //will wait only for 5 seconds and not more to execute
    console.log("test 2 executed");
 
})

test("test3",async()=>{ 
    console.log("test 3 executed");
})
})




