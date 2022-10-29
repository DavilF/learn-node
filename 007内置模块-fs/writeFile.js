const fs = require('fs');


//如果没有文件，往里面创建文件再写入，若有文件就会把原来的内容覆盖
fs.writeFile('./avatar/a.txt', 'Hello World 你好!', (err)=>{
    console.log(err)
})