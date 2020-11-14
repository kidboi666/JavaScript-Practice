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