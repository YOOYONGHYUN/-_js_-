// ["김", "밥", 1, 2, 3];

var a = [1, 2, 3];
var b = "김밥";
var c = [...b, ...a];
console.log(c);

// [[1, 2, 3], "you", "are"];  you

var a = [1, 2, 3];
var b = ["you", "are"];
var c = function (a, b) {
  console.log([[...a], ...[...b]][1]);
};

c(a, b);

function 함수(a = 5, b = a * 2) {
  console.log(a + b);
  return 10;
}
함수(3);

function 함수(a = 5, b = a * 2) {
  console.log(a + b);
}
함수(undefined, undefined);

function 어레이(...rest) {
  console.log([...rest]);
}

var newArray = 어레이(1, 2, 3, 4, 5, 6, 7);
console.log(newArray);

var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));

function 정렬(a) {
  console.log([...a].sort());
}

정렬("bear");

function 글자세기(a) {
  let input = [...a];
  let map = new Map();

  for (let i = 0; i < input.length; i++) {
    map.set(input[i], map.get(input[i]) + 1 || 1);

    // if (obj[input[i]] > 0) {
    //   obj[input[i]]++;
    // } else {
    //   obj[input[i]] = 1;
    // }
  }
  console.log(map);
}

글자세기("aacbb");

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.부가세 = function () {
    console.log(this.price * 0.1);
  };
}

var product1 = new Product("shirts", 50000);
console.log(product1);
product1.부가세();
