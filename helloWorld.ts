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
