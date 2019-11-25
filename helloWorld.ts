var a: string = "HelloWorld"
console.log(a)

function searchXiaoJieJie(age: number, stature?: string): string {

  let the: string = ''
  the = '我找到了' + age + '岁'
  if (stature != undefined) {
    the = the + stature
  }
  return the + '的小姐姐'
}

var age: number = 15
var result: string = searchXiaoJieJie(age, '大长腿')
console.log(result);

function searchXiaoJieJie2(age: number = 18, stature: string = '大长腿'): string {
  let yy: string = ''
  yy = '我找到了' + age + '岁'
  if (stature != undefined) {
    yy = yy + stature
  }
  return yy + '的小姐姐'
}

var result2: string = searchXiaoJieJie2()
console.log(result2)

function searchXiaoJieJie3(...xuqiu: string[]): string {
  let yy: string = '我找到了'
  for (let i = 0; i < xuqiu.length; i++) {
    yy = yy + xuqiu[i]
    if (i < xuqiu.length - 1) {
      yy = yy + '、'
    }
  }
  yy = yy + '的小姐姐'
  return yy
}

var result3: string = searchXiaoJieJie3('22岁', '大长腿', '水蛇腰', '瓜子脸')
console.log(result3);

function Add(n1: number, n2: number): number {
  return n1 + n2
}
var result4: number = Add(8, 90)
console.log(result4);

var add = function (n1: number, n2: number): number {
  return n1 + n2
}
console.log(add(8, 88));

var add2 = (n1: number, n2: number): number => {
  return n1 + n2
}
console.log(add2(3, 4));



