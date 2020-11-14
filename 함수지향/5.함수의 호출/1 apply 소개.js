function func() {

}
func();
// 위는 함수를 호출하는 가장 기본적인 방법이다. 함수를 선언하고 그 뒤에 함수를 호출한다.

// Java Script는 함수를 호출하는 특별한 방법을 제공한다. 함수는 객체라고 했다. 위 예제에서 함수 func는 function이라는 객체의 인스턴스다. 따라서 func는 객체 function이 가지고 있는 메소드들을 상속하고 있다. 지금 이야기하려는 메소드는 function.apply와 function.call이다. 이 매소드들을 이용해서 함수를 호출해보자.

function sum(arg1, arg2) {
  return arg1 + arg2;
}
alert(sum.apply(null, [1, 2]))

// 함수 sum은 function 객체의 인스턴스다. 그렇기 때문에 객체 function의 메소드 apply를 호출 할 수 있다. apply 메소드는 두개의 인자를 가질 수 있는데, 첫번쨰 인자는 함수(sum)가 실행될 맥락이다. 맥락의 의미는 다음 예제를 통해서 살펴본다. 두번째 인자는 배열인데, 이 배열에 담겨있는 원소가 함수(sum)의 인자로 순차적으로 대입된다. function.call은 사용법이 거의 비슷하다. 여기서는 언급하지 않는다.