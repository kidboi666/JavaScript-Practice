let vscope = 'global';
function fscope() {
  var vscope = 'local'; // 함수 안에 있는 변수 앞에 var를 쓰게되면 로컬 변수가 된다. 
  alert(vscope);
}
fscope();

let vscope = 'global';
function fscope() {
  vscope = 'local'; // 앞에 var를 빼게되면 local이 아닌 global 변수를 의미한다. 즉, 전역 변수 자체의 값을 변경한게 된다.
  alert(vscope);
}
fscope();

let vscope = 'global';
function fscope() {
  var vscope = 'local'
  vscope = 'local'; // 앞에 var를 빼게되면 global 변수에 할당하기 전에 함수 안에 local 변수가 있는지 먼저 확인을 한뒤, 있다면 해당 local 변수의 값을 변경한다. 없다면 global 변수의 값을 할당한다 (유동적인 놈이다)
  alert(vscope);
}
fscope();

//전역 변수는 함수 이름의 의미가 중요하다. 이름의 충돌을 회피하려면 지역 변수 위주로 사용하는 것이 좋다. 명확한 이유와 의도가 없다면 전역 변수 사용은 지향해야 한다.

//변수 선언시 앞에 var은 생략해도 변수 선언에 문제가 없지만 상황에 따른 변수의 역할이 유동적으로 변화할 수 있어 의도치 않은 명령이 일어날 수 있다. 지역 변수가 가까이 있다면 지역변수로, 없다면 전역 변수로 사용되는 특성을 주의하여 되도록이면 생략하지 않는 것이 좋다.

//!!! 함수의 핵심은 로직의 재활용이다. (리팩토링)