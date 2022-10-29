const fs = require('fs');

//1、重命名
fs.rename('./avatar', './avatar2', (err)=>{
    //console.timeLog(err)
    if(err && err.code === 'ENOENT'){
        console.log('当前目录不存在！')
    }
})