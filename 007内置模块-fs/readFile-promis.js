const fs = require('fs').promises;

fs.readFile('./avatar/1.txt','utf-8').then(res=>{
    console.log('读出的结果是：', res)
})