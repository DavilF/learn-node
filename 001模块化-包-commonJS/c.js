//module-c
function test(){
    console.log('test-ccc')
}

//把需要暴露的接口扔出去
//方法1： 采用commonJS规范暴露方式，module.exports = xx
module.exports = {
    test
}