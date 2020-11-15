function Person(name) {
  this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function() {
  return `My name is ${this.name}`;
}


function Programmer(name) {
  this.name = name;
}
Programmer.prototype = new Person();
// 만약 어떠한 객체를 상속받고 싶다면 그 객체를 생성자의 프로토타입에 할당을 시키면 된다.

var p1 = new Programmer('egoing');
document.write(p1.introduce());
// Programmer 라는 생성자를 만들었다. 그리고 이 생성자의 prototype과 Person의 객체를 연결했더니 Programmer 객체도 메소드 introduce를 사용할 수 있게 되었다.

// Programmer가 Person의 기능을 상속하고 있는 것이다. 단순히 똑같은 기능을 갖게 되는 것이라면 상속의 의의는 사라질 것이다. 부모의 기능을 계승 발전할 수 있는 것이 상속의 가치다.