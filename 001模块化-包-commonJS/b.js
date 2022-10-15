//module-b
const moduleA = require('./a');
function test(){
    console.log('test-bbb')
}

console.log('B引入时module-b模块内部调用module-a方法upper:',moduleA.upper('are you ok?'));


//把需要暴露的接口扔出去
//方法1： 采用commonJS规范暴露方式，module.exports = xx
module.exports = {
    test
}