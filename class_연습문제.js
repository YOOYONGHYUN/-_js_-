class dog {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  한살먹기() {
    if (this instanceof cat) {
      this.age++;
    }
  }
}

var 강아지1 = new dog("말티즈", "white");
console.log(강아지1);
var 강아지2 = new dog("진돗개", "brown");
console.log(강아지2);

class cat extends dog {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}

var 고양이1 = new cat("코숏", "white", 5);
console.log(고양이1);

class Unit {
  constructor(공격력 = 5, 체력 = 100) {
    this.공격력 = 공격력;
    this.체력 = 체력;
  }

  get battlePoint() {
    return this.공격력 + this.체력;
  }

  set heal(a) {
    this.체력 = this.체력 + a;
  }
}

var data = {
  odd: [],
  even: [],

  setter(...a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] % 2 == 0) {
        this.even.push(a[i]);
      } else this.odd.push(a[i]);
    }
  },

  get getter() {
    return [...this.odd, ...this.even].sort((a, b) => a - b);
  },
};

data.setter(1, 2, 3, 4, 5);
console.log(data.getter);
