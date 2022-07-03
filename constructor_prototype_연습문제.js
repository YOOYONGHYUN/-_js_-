function Student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`안녕 나는 ${this.name}이야`);
  };
}

var 학생1 = new Student("Kim", 20);
console.log(학생1);
학생1.sayHi();

function Parent() {
  this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log(a);
console.log(a.name);

var arr = [1, 2, 3];

Array.prototype.remove3 = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == 3) {
      arr.splice(i, 1);
    }
  }
};

arr.remove3();
console.log(arr);

class 부모 {
  constructor(name) {
    this.name = name;
    this.sayHi = function () {
      console.log(`hello ${this.name}`);
    };
  }
}

var 자식 = new 부모("bob");
console.log(자식);
자식.sayHi();

// class 부모 {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`hello ${this.name}`);
//   }
// }

// var 자식 = new 부모("bob");
// console.log(자식);
// 자식.sayHi();
