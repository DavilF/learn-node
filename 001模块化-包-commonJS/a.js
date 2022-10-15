//module-a
function test(){
    console.log('test-aaa')
}

function upper(str = ''){
    return str.substring(0,1).toUpperCase()  + str.substring(1);
}

//私有方法
function _init(){
    console.log('A内部自己引入时就会执行：init---aaa');
}
_init();

//把需要暴露的接口扔出去
//方法1： 采用commonJS规范暴露方式，module.exports = xx
module.exports = {
    test,
    upper
}

//暴露方法2：
//exports.test = test;
//exports.upper = upper; 