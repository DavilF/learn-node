const fs = require('fs');

fs.appendFile('./avatar/a.txt', '\nappendFile追加!', (err)=>{
    console.log(err)
})