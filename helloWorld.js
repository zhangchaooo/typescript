"use strict";
var a = "HelloWorld";
console.log(a);
function searchXiaoJieJie(age, stature) {
    var the = '';
    the = '我找到了' + age + '岁';
    if (stature != undefined) {
        the = the + stature;
    }
    return the + '的小姐姐';
}
var age = 15;
var result = searchXiaoJieJie(age, '大长腿');
console.log(result);
