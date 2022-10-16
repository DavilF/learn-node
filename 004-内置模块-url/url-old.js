const url = require('url');

var a = url.resolve('/one/two/three','four')
console.log(a) //=> '/one/two/four';

//前面是域名，域名后面的都会被后面第二个参数所替换掉
var b = url.resolve('http://example.com/','/one');
console.log(b);