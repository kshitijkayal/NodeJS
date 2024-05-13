const fs = require("fs")
//sync..
// fs.writeFileSync("./test.txt", "hey there");

//Async...
// fs.writeFile("./test.txt", "Hey there", (err)=> {})

//Sync
// const read = fs.readFileSync("./contact.txt","utf-8");
// console.log(read);


fs.readFile("./contact.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log(res);
    }
});
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());