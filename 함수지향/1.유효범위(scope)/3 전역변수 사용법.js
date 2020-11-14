var MYAPP = {} // 객체를 지닌 전역 변수 선언
MYAPP.calculator = { //calculator 라는 속성의 값으로는 아래의 객체가 옴
  'left' : null, // null은 아직 값을 지정하지 않았다는 것을 프로그래머가 의도적으로 지정하는 값
  'right' : null
}
MYAPP.coordinate = { // coordinate 라는 속성의 값으로는 아래의 객체가 옴
  'left' : null, 
  'right' : null
}
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
  return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());


(function() {
  var MYAPP = {} // 함수 안의 지역 변수로서 변수 중복의 위험을 피할 수 있다.
  MYAPP.calculator = {
    'left' : null, 
    'right' : null
  }
  MYAPP.coordinate = {
    'left' : null, 
    'right' : null
  }
  MYAPP.calculator.left = 10;
  MYAPP.calculator.right = 20;
  function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
  }
  document.write(sum());
}()) // 익명 함수를 만들고 바로 호출. 전역 변수를 만들지 않는 방식이다. 


function myappfn() {
  var MYAPP = {} // 함수 안의 지역 변수로서 변수 중복의 위험을 피할 수 있다.
  MYAPP.calculator = {
    'left' : null, 
    'right' : null
  }
  MYAPP.coordinate = {
    'left' : null, 
    'right' : null
  }
  MYAPP.calculator.left = 10;
  MYAPP.calculator.right = 20;
  function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
  }
  document.write(sum());
}
myappfn(); // 함수의 이름도 변수 안에 들어가있는 함수기에 전역 변수와 같다.