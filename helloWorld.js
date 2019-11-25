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
function searchXiaoJieJie2(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大长腿'; }
    var yy = '';
    yy = '我找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result2 = searchXiaoJieJie2();
console.log(result2);
function searchXiaoJieJie3() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '我找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result3 = searchXiaoJieJie3('22岁', '大长腿', '水蛇腰', '瓜子脸');
console.log(result3);
function Add(n1, n2) {
    return n1 + n2;
}
var result4 = Add(8, 90);
console.log(result4);
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(8, 88));
var add2 = function (n1, n2) {
    return n1 + n2;
};
console.log(add2(3, 4));
