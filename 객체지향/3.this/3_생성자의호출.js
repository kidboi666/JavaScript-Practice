// 함수 안에서 this라는 것은 그 함수가 소속되어 있는 객체를 가리킨다. - 기본적 원칙
// 여러가지 함수 호출 컨텍스트 마다 this는 결국 같은 메카니즘 선상에 있다.


var funcThis = null;

function Func() {
 funcThis = this; 
}
var o1 = Func();
if(funcThis === window) {
  document.writein('window');
}
var o2 = new Func();
if(funcThis === o2) {
  document.writein('o2');
}

// 아오 시발 모르겠다 