const http = require('http');

//创建服务器
http.createServer((req, res)=>{
    //req 接收浏览器传的参数


    //res 返回渲染的内容
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});//响应头
    res.write('<b>Hello World!</b>  <b>你好世界</b>');//响应体
    res.end();
}).listen(3000, ()=>{
    console.log('server start')
})