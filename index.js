const http = require("http");
const server = http.createServer((req,res)=>{
res.write("success !");
res.end();
});
// here some changes
server.listen(8080);