var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name} 이야`);
  },
};

사람.sayHi();

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function () {
  let sum = 0;
  for (let i = 0; i < this.data.length; i++) {
    sum += this.data[i];
  }

  console.log(sum);
};

자료.전부더하기();

//Hoisting
//변수의 선언을 변수 범위 맨위로 끌고오는 현상
console.log(나이); // 에러가 뜨지 않음. var 나이;
var 나이 = 30;
console.log(나이); // 나이 = 30;

// 함수();
// function 함수() {
//   console.log(안녕);
//   let 안녕 = "Hello!";
// }

// 함수();
// function 함수() {
//   console.log(안녕);
//   var 안녕 = "Hello!";
// }

// let a = 1;
// var 함수 = function () {
//   a = 2;
// };
// console.log(a);

// let a = 1;
// var b = 2;
// window.a = 3;
// window.b = 4;

// console.log(a + b);

for (var i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
