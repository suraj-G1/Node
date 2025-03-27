const http = require('http');
http.createServer((req,res)=>{
    console.log("Request",req)
    //let data;
    res.end(JSON.stringify({

        success:true,
        message:"You are on Good Path"

    }))
}).listen(3000,()=>{
    console.log("Running Fine")
})
const promise = new Promise((res,rej)=>{
    res()
}).then(()=>{
    console.log("Promise Executed")
});