const http = require('http');
const url = require('url');

//创建服务器
http.createServer((req, res)=>{
    //req 接收浏览器传的参数
    if(req.url === '/favicon.ico'){
        return;
    }
    console.log(url.parse(req.url).pathname);
    const pathname =  url.parse(req.url).pathname;

    //res 返回渲染的内容
    res.writeHead(renderStaus(pathname),{"Content-Type":"text/html;charset=utf-8"});//响应头
    res.write(renderHtml(pathname));//响应体
    res.end();
}).listen(3000, ()=>{
    console.log('server start')
});



function renderHtml(url){
    switch(url){
        case '/home':{
            return '<div>Home页面</div>';
        }
        case '/list':{
            return '<div>List页面</div>';
        }
        case '/api/list':{
            return `[1,2,3,4,5]`;
        }
        default:{
            return '没有匹配到上面页面（404）';
        }
    }
}

function renderStaus(url){
    var router = ['/home','/list','/api/list'];
    return router.includes(url) ? 200 : 404;
}