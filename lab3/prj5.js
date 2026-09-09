import http from 'http'
const server = http.createServer((req,res)=>{
    // req method -> GET, POST, PUT, DELETE,PATCH
    console.log('Method:',req.method);
    console.log('URL:',req.url);
    // browser can send only GET request to the server
    // POST/PUT/DELETE/PATCH -> can be checked by 7 api server
