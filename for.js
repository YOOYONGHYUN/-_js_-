let 데이터 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let a of 데이터) {
  for (let b of 데이터) {
    console.log(`${a} x ${b} = ${a * b}`);
  }
}

var products = [
  {
    name1: "chair",
    price1: 7000,
  },
  {
    name2: "sofa",
    price: 5000,
  },
  {
    name1: "desk",
    price3: 9000,
  },
];

// for (let a of products) {
//   for (let key in a) {
//     if (isNaN(parseInt(key[key.length - 1])) == false) {
//       newValue = a[key];
//       newKey = key.replace(/[0-9]/g, "");
//       a[newKey] = newValue;
//       delete a[key];
//     }
//   }
//   //   key.replace(/1-9g/, "");
// }

// console.log(products);

let newValue;
let newKey;

for (let item of products) {
  for (let key in item) {
    //마지막글자를 숫자로변환했을 때 NaN이 안나오면 (숫자면)
    if (isNaN(parseInt(key.slice(-1))) == false) {
      newValue = item[key];
      newKey = key.slice(0, -1);
      item[newKey] = newValue;
      delete item[key];
    }
  }
}

console.log(products);
