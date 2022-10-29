const fs = require('fs');

//删除文件
fs.unlink('./avatar/a.txt', (err) => {
    if (err && err.code === 'ENOENT') {
        console.log('当前删除文件不存在！')
    }
})