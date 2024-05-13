const http  = require("http")
const fs = require("fs")
const url = require("url")

const myServer  = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    if(req.url === '/favicon.ico') return res.end();
    const logs = `${Date.now()}:${req.url} new request recieved\n`;
    fs.appendFile('log.txt',logs,()=>{});
    switch(myUrl.pathname){
        case '/' : res.end("homepage");
        break
        case '/about' :
        const username = myUrl.query.name;
        res.end(`Hi, ${username}`);
        break
        default : res.end("404: not found")
    }
    // console.log('req recieved');
    // console.log(req.headers);
    // res.end('Hello from server');
});
myServer.listen(8000, ()=> console.log("server started"));