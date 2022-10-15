//index.js

//按需引入,遵循commonJS规范引入方式
const moduleA = require('./a');
const moduleB = require('./b');
const moduleC = require('./c');

console.log('moduleA', moduleA);

//use
moduleA.test();
moduleB.test();
moduleC.test();

console.log(moduleA.upper('davi'));

/**
 所有的代码运行结果如下：
    A内部自己引入时就会执行：init---aaa
    B引入时module-b模块内部调用module-a方法upper: Are you ok?
    moduleA { test: [Function: test], upper: [Function: upper] }
    test-aaa
    test-bbb
    test-ccc
    Davi
 **/