// 함수는 apply 와 call이라는 메소드를 가지고 있다.

function sum(x, y){ return x+y } // sum이라고 하는 함수 객체를 만든 것과 같다.
// 함수를 쉽게 작성할 수 있도록 정의한 문법을 함수 리터럴이라 한다.
// var object = { ... }  -> 이것은 객체 리터럴 이다. new Object 할수도 있는것.
// var a = [1, 2, 3] -> 이것은 배열 리터럴 이다. new Array(1,2,3)도 된다.
//
sum(1,2); // 3

var sum = new Function('x', 'y', 'return x+y')
sum(1,2); // 3          여기서 x와 y는 매개 변수를 지정하는것 과 같다
//                    그 뒤에 나오는 return은 함수의 본문에 해당하는 것과 같다.

// 함수의 메소드인 apply, call을 이용하면 this의 값을 제어할 수 있다.