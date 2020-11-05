// var・・・再宣言、書き換え可能
// let・・・再宣言不可、書き換え可能
// const・・・再宣言不可、書き換え不可。ただし、リストのようなオブジェクトは書き換え可能

// const val4 = {
//   name: "榎原",
//   age: "25"
// };
// val4.name = "山下";
// val4.address = "東京";
// console.log(val4);

//テンプレート文字列
// const name = "榎原";
// const age = 25;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
/**
 * 従来の関数
 * function func1(str) {
 *  return str;
 * }
 */
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
