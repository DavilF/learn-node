const http = require('http');
const https = require('https');
const url = require('url');

//创建服务器
http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    //console.log(urlObj);
    res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "access-control-allow-origin": '*'
    });
    switch (urlObj.pathname) {
        case '/api/getMaoyanData': {
            //扮演客户端去小米优品要数据
            httppost((data) => {
                res.end(data)
            });
            break;
        }
        case '/api/xiaomidata': {
            //扮演客户端去小米优品要数据
            httppost((data) => {
                res.end(data)
            });
            break;
        }
        default: {
            res.end('404')
            break;
        }
    }
}).listen(3000, () => {
    console.log('server start')
});



function httppost(cb) {
    var data = '';
    
    var options = {
        hostname:'www.xiaomiyoupin.com',
        port:'443',
        path:'/mtop/market/search/placeHolder',
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        }
    }
    var request = https.request(options, (res)=>{
        res.on('data', chunk=>{
            data += chunk;
        });

        res.on('end', ()=>{
            cb(data);
        })
    });
    request.write(JSON.stringify([{},{"ypClient":3}]));
    request.end();
}
