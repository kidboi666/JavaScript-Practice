//<-- 전역객체란 ? -->
// 모든 객체는 이 전역객체의 프로퍼티다. 

function func() {
  alert('hello?');
}
func();
//
window.func();
//객체    속성 -> (함수) 즉 메소드
// 즉 window라는 객체의 메소드 
// 매번 window를 붙히지 않아도 암시적으로 func()만으로 사용 가능


var o = {'func':function() {
  alert('hello');
}}

o.func();
//
window.o.func();

// 즉 자바스크립트에선 모든 객체가 전역 객체의 프로퍼티 라는것을 알 수 있다.