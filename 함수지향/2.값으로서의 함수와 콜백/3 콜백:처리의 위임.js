// 값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수로 전달 할 수 있다. 값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다. 인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다.

// 함수가 수신하는 인자가 함수인 경우를 콜백이라 한다.

var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function sortNumber(a, b) {
  return a - b;

//   if(a > b) {
//     return 1;
//   } else if(a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
}

console.log(numbers.sort(sortNumber));
//                        콜백 함수
//                  값으로서 함수를 사용할 수 있기 때문에 내장 함수의 
//                  동작 방법에 값을 전달하는 것을 통해서 완전하게 바꿀 수 있다.