const express = require('express');
const fs = require('fs');
const app = express();
app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"You are Champ"
    })
});
app.listen(3000,()=>{
    console.log("App is Running on Server")
})

fs.writeFile("hey.txt","Hello There",(err)=>{
    if(err)console.error(err)
    else console.log("Running fine")
})
fs.appendFile("hey.txt","I am Fine",(err)=>{
    if(err)console.error(err)
    else console.log("Appended")
})

fs.unlink("hey.text",(err)=>{
    if(err)console.error(err)
    else console.log("Deleted")
})

fs.mkdir("Suraj",(err)=>{
    if(err)console.error(err)
    else console.log("Dir created")
})

fs.writeFile("./Suraj/index.js",`console.log("Working Fine")`,(err)=>{
    if(err)console.error(err)
    else console.log("File Created in Folder")
})