const fs = require("fs");

// fs.writeFileSync("example.txt","Hello form nitika", (err) =>{
//     if (err) throw err;
//     console.log("The file has been saved successfully"); 
// })


fs.readFile("./example.txt","utf-8" ,(err,data) =>{
    if (err) throw err;
    console.log(data); 
})
