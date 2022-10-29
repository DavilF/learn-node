const fs = require('fs');

//读取指定目录下的文件
fs.readdir('./avatar',(err, data)=>{
    if(!err){
        console.log(data)
    }
})