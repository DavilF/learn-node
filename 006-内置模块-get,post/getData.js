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
            //扮演客户端去猫眼要数据
            httpget((data) => {
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



function httpget(cb) {
    var data = '';
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%8D%97%E4%BA%AC&ci=55&channelId=4`, (res) => {
        res.on('data', (chunk) => {
            //console.log('chunk:',chunk);
            data += chunk;
        });

        res.on('end', () => {
            //console.log(data)
            cb(data);
        })
    })
}
