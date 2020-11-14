o1 = { val1:1, val2:2, val3:3 }
o2 = { v1:10, v2:50, v3:100, v4:25 }
function sum() {
  var _sum = 0;
  for(name in this) {
    _sum += this[name];
  }
  return _sum;
}
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185

// 함수 sum은 객체의 속성을 열거할 때 사용하는 for in 문을 이용해서 객체 자신(this)의 값을 열거한 후에 각 속성의 값을 지역변수 _sum에 저장한 후에 이를 리턴하고 있다.

// 객체 function의 메소드 apply의 첫번째 인자는 함수가 실행될 맥락이다. 이렇게 생각하자. sum.apply(o1)은 함수sum을 객체 o1의 메소드로 만들고 sum을 호출한 후에 sum을 삭제한다. 아래와 비슷하다 (실행결과가 조금 다를 것이다. 그것은 함수 for in 문으로 객체 o1의 값을 열거할 때 함수 sum도 포함되기 때문이다.)

o1.sum = sum;
alert(o1.sum());
delete o1.sum();


// this가 만들어지는 경우,
// 1. 일반 함수에서 this -> window
// 2. 중첩 함수에서 this -> window
// 3. 이벤트에서 this -> 이벤트 객체
// 4. 메소드에서 this -> 메소드 객체
// 5. 메소드 내부의 중첩 합수에서 this -> window