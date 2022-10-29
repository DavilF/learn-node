const fs = require('fs').promises;

const basePath = './avatar'
fs.readdir(basePath).then(async (data) => {
    console.log(data);
    await Promise.all(data.map(item => fs.unlink(`${basePath}/${item}`)));
    await fs.rmdir(basePath);
})