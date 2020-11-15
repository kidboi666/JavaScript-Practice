// 객체는 연관된 로직들로 이루어진 작은 프로그램이라고 할 수 있다. 상속은 객체의 로직을 그대로 물려 받는 또 다른 객체를 만들 수 있는 기능을 의미한다. 단순히 물려받는 것이라면 의미가 없을 것이다. 기존의 로직을 수정하고 변경해서 파생된 새로운 객체를 만들 수 있게 해준다. -> 로직의 재활용성 강조 !

// 상속 (inheritance)

function Person(name) {
  this.name = name;
  this.introduce = function() {
    return `My name is ${this.name}`;
  }
}
var p1 = new Person('egoing');
document.write(p1.introduce()); // My name is egoing




function Person(name) {
  this.name = name;
}
Person.prototype.name = null; // prototype이라는 프로퍼티안에는 어떤 객체가 있다.
Person.prototype.introduce = function() { // prototype의 name을 함으로써 name에 값을 넣을 수 있고 prototype의 introduce하면서 introduce에 익명 함수를 넣을 수가 있다.
  return `My name is ${this.name}`;
}
var p1 = new Person('egoing');
document.write(p1.introduce()); // My name is egoing