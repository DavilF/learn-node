const fs = require('fs');

fs.stat('./avatar', (err, data)=>{
    console.log('是不是文件：',data.isFile());
    console.log('是不是目录：',data.isDirectory());
})