//字符串转对象
var str = "name=davi&age=100&location=Nanjing"
var querystring = require("querystring");
var obj = querystring.parse(str);
console.log(obj);


//对象转字符串
var myObj = {
    name: 'davi',
    age: '100',
    location: 'Nanjing'
};
var mystr = querystring.stringify(myObj);
console.log(mystr);