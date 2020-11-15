// 함수 안에서 this라는 것은 그 함수가 소속되어 있는 객체를 가리킨다. - 기본적 원칙
// 여러가지 함수 호출 컨텍스트 마다 this는 결국 같은 메카니즘 선상에 있다.

var funcThis = null; // 함수를 호출하면 그 함수는 window라는 객체의 메소드 이기때문에 그 함수는 window를 가리킨다.

function Func() {
 funcThis = this; // 앞에 var이 없어서 전역 변수를 가리킴
}
var o1 = Func(); // 일반 함수
if(funcThis === window) {
  document.writein('window');
}
var o2 = new Func(); // 생성자 함수 -> 내부적으로 비어있는 객체를 만들고 그 비어있는 객체가 그 생성자 안에서의 this가 된다.
if(funcThis === o2) {
  document.writein('o2');
}

// 생성자 안에서의 this는 그 생성자가 만든 객체를 가리킨다.