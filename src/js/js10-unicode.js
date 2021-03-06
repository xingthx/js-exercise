/* js 
   unicode to char
   char to unicode
   js 自动处理 unicode转中文
*/
//1. u to c
console.log('------unicode to char---------');
var reg=/\\u[0-9a-z]{4}/gim;
var utoc=function(u){
    if(typeof u==='string'){
        if(u.indexOf('\\u')>=0){
            u=u.substr(2);
        }
        var num=parseInt(u,16);
        var s = String.fromCharCode(num);
        return s;
    }
    return '';
}
var stoc=function (str){
    if(typeof str==='string'){
        var s = str.replace(reg,utoc);
        return s;
    }
    return '';
}
//test
var s='\\u4E70';
console.log(reg.test(s));
console.log(s.replace(reg,utoc));
var ch = utoc('\\u4e71');
console.log(ch);

//js 打印中文
var str='hello world\u4e71hello world \u6e2d';
console.log(str);



//2. c to u
console.log('------char to unicode---------');
var ctou=function(c){
    if(typeof c==='string'){
        var num = c.charCodeAt();
        var u=num.toString(16);
        return '\\u'+u;
    }
    return '';
}
console.log(ctou('您'));
