// 객체를 만드는 방법 복습
var person = {} // 빈 객체 생성
person.name = 'egoing'; // name이라는 프로퍼티와 egoing이라는 값이 담겨있다
person.introduce = function() { // 객체의 프로퍼티 안에 담겨있는게 함수라면 메소드라고 한다.
  return 'My name is' + this.name;
}
document.write(person.introduce()); // person 객체안에 담겨있는 introduce 프로퍼티를 호출한다.

// 위의 방법은 객체 선언부에 하단에 다른 명령어가 들어올 경우 문제가 생길 여지가 있다.
// 다른 객체 생성 방법을 알아보자

var person = {
  'name' : 'egoing',
  'introduce' : function() { return `My name is ${this.name}`;}
}
document.write(person.introduce());
// 내용 변조의 위험성이 줄어들고 가독성도 늘어났다.

let person = {
  'name' : 'dolosolo',
  'introduce' : function() { return `Hello! My name is ${this.name}`},
  'doityourself' : function(a, b) { return a + b }
}
console.log(person['doityourself'](3, 5));

// 객체란 서로 연관된 변수와 함수를 그룹핑한 그릇이라고 할 수 있다. 객체 내의 변수를 프로퍼티(property) 함수를 메소드라고 부른다.
var person = {}
person.name = 'egoing';
person.introduce = function() {
  return `My name is ${this.name}`
}
document.write(person.introduce);




///





var person = {
  'name' : 'egoing',
  'introduce' : function() {
    return `My name is ${this.name}`
  }
}

function Person(name) { //name이라는 매개변수를 가지고 있는 Person 함수를 만들고
  Person.name = name; //name 프로퍼티는 매개변수 name의 인자를 받고
  Person.introduce = function() { //this.name을 반환하는 익명함수를 introduce에 넣고
    return `My name is ${this.name}`
  }
}

var p1 = new Person('dolosolo'); //생성자 함수를 통해 외부에서 마음껏 초기화 작업을 하고 있다.
var p2 = new Person('kidboi'); //코드의 재사용성을 높이는데에 목적을 둔 생성자 함수