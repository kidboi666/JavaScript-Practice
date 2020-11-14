// 생성자 (constructor) 객체를 만드는 역할을 하는 함수다. 자바 스크립트에서 함수는 재사용 가능한 로직의 묶음이 아니라 객체를 만드는 창조자라고 할 수 있다.

function Person(){}
var p0 = Person()
p0 // undefined

var p = new Person(); // 앞에 new가 붙으면 뒤에 오는 함수는 함수라 하지 않고 객체 생성자라고 한다.
p // Person {} <- 비어있는 객체라는 뜻이다.

// 자바에는 클래스가 있다. 그 안에 생성자가 존재한다. 생성자를 호출하는걸 통해 클래스의 인스턴스, 즉 클래스의 객체를 만들어낸다.
// 자바스크립트는 생성자가 어디에도 소속되어 있지 않다. 그냥 함수일 뿐이다. 그리고 그 앞에 new를 붙이게되면 객체를 생성하게 된다. 클래스라는 존재는 존재하지 않는다.

function Person() {
  var p = new Person();
  p.name = 'dolosolo';
  p.introduce = function() {
    return `My name is ${this.name}`;
  }
}
document.write(p.introduce());

// new 생성자를 통해 만든 함수다. 
// 여러 사람의 이름을 넣어야 한다면 다음과 같이 만들 수 있다.

function Person() {
  var p1 = new Person();
  p1.name = 'dolosolo';
  p1.introduce = function() {
    return `My name is ${this.name}`;
  }
  var p2 = new Person();
  p2.name = 'kidboi';
  p2.introduce = function() {
    return `My name is ${this.name}`;
  }
}
document.writein(p1.introduce());
document.writein(p2.introduce());

// 코드의 중복성이 미쳤다. 이런 식의 코드는 시니어로 인한 볼기짝만 부어오르게 될 것이다.


function Person(userName) { // 생성자 함수는 일반함수와 구분하기 위해 첫글자를 대문자로 한다.
  this.userName = userName; // 사용자를 함수 내에서 직접 정의하지 않고 
  this.introduce = function() { // 매개변수를 통해 인자를 받는 작업으로
    return `My name is ${this.userName} !` // 코드의 재사용성을 높였다.
  }  //                            이러한 작업을 초기화라고 한다.
}
var user1 = new Person('dolosolo'); // 
alert(user1.introduce()); // 생성자 함수 바깥에서 따로 유저를 매개변수로 할당 하는 코드를 씀으로 얼마든지 수많은 유저를 생성자 코드에 대입할 수 있다.

var user2 = new Person('kidboi');
alert(user2.introduce());

//<-- 자바스크립트 생성자의 특징 -->
// 일반적인 객체지향 언어에서 생성자는 클래스의 소속이다. 하지만 자바스크립트에서 객체를 만드는 주체는 함수다. 함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은 자바스크립트에서 함수의 위상을 암시하는 단서이면서 또 자바스크립트가 추구하는 자유로움을 보여주는 사례라고 할 수 있다.
