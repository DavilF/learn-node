const fs = require('fs');

fs.readFile('./avatar/a.txt', 'utf-8',(err,data)=>{
    if(!err){
        //console.log('read数据----:',data.toString('utf-8'));
        console.log('read数据----:',data);
    }
})