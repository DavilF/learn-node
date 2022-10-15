import moduleA  from './module/moduleA.js';
import { moduleB } from './module/moduleB.js';
console.log('A模块调用结果：',moduleA.getName())
console.log('B模块调用结果：',moduleB.getName())