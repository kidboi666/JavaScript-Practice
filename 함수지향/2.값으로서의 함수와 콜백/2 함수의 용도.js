// 함수는 함수의 리턴 값으로도 사용할 수 있다.

function cal(mode) {
  var funcs = {
    'plus' : function(left, right) { return left + right },
    'minus' : function(left, right) { return left - right } 
  }
  return funcs[mode];  // 함수는 반환 값으로도 사용할 수 있다.
}
alert(cal('plus')(2,1)); // 3
alert(cal('minus')(2,1)); // 1


// 함수가 변수에도 저장될 수 있고 그렇기 때문에 자연스럽게 객체에 저장될 수 있는데 객체에 저장된 함수를 메소드라 달리 부른다
// 함수는 인자로도 전달 될 수 있고 함수의 리턴값으로도 사용될 수 있다.




// 함수는 배열의 값으로도 사용할 수 있다. 

var process = [
  function(input) { return input + 10 },
  function(input) { return input * input },
  function(input) { return input / 2 }
]
var input = 1;
for(var i = 0; i < process.length; i++){
  input = process[i](input);
}
alert(input);

// 함수는 값이기 때문에 값을 저장하는 컨테이너인 배열에도 저장할 수 있다.

// 변수 , 함수의 매개변수 , 리턴값 ... 
// 이렇게 다양한 용도로 사용할 수 있는 형태의 데이터를 
// first-class-citizen 라고 부른다. java script 에서 함수가 여기에 해당 된다.
//             object
//             entity