// JavaScript 에서는 함수도 객체다. 다시 말해서 일종의 값이다. 거의 모든 언어가 함수를 가지고 있다. JavaScript의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.

function a() {}; // a라는 변수에 담겨진 함수다
// or
var a = function() {}; //이건 그냥 함수다

a = {
  b:function() { //이건 객체 안에 있는 함수라서 메소드라고 부른다. 그 옆에 키는 프로퍼티 라고 부른다.
  }
};

// 객체 안에서 key는 일종의 변수와도 같은 역할을 하고 있다. 왜냐하면 값을 가지고 있기 때문
// 객체 안에서 변수의 역할을 하고 있는 것을 속성, Property 라고 한다.
// 객체의 속성 값으로 저장되어 있는 값이 함수라면, 그 함수를 메소드 라고 한다.

// 함수는 값이기 떄문에 다른 함수의 인자로도 전달될 수 있다.


function cal(func, num) {
  return func(num)
}
function increase(num) {
  return num+1
}
function decrease(num) {
  return num-1
}
alert(cal(increase, 1));
alert(cal(decrease, 1));

// 0. 3개의 함수가 선언되었고 alert 명령어로 cal 함수에 각각의 인자를 대입시킨다.
// 1. 첫번째 alert(cal(increase, 1)) 은 func에 increase를 num에는 1을 대입시켰다.
// 2. func에 대입된 increase는 num에 숫자 1을 더하는 값을 반환한다.
//  즉 첫번째 alert의 값은 2가 된다.

// 1. 두번째  alert(cal(decrease, 1)) 은 func에 decrease를 num에는 1을 대입시켰다.
// 2. func에 대입된 decrease는 num에 숫자 1을 빼는 값을 반환한다.
//  즉 두번째 alert의 값은 0이 된다.