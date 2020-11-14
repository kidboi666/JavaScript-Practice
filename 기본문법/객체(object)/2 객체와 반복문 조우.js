// 다음은 반복문을 통한 배열의 값을 모두 가져오는 방법이다.
var arr = ['a', 'b', 'c'];

for(var i = 0; i < arr.length; i++) { // arr 배열의 길이가 될떄 까지 반복문을 실행한다.
  console.log(arr[i]); // a b c
}

// 배열은 저장된 데이터들이 순서를 가지고 있다 - 중요
// 객체 안에 저장된 값은 순서가 없다. key 와 value 가 있을 뿐이다. 즉 위에 방법으론 객체의 값을 꺼내올 수 없다.

var grades = { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 };
for(key in grades) {
// 변수명    객체명    -> 객체 안의 key값을 key라고 정의한 변수에 전부 담는 반복문이다. key값의 value값은 담기지 않는다.
  console.log(key);
}
// egoing k8805 sorialgi

// key값은 출력되지만 key의 value값은 출력되지 않는다. for in 반복문을 만드는 과정에서 key 라는 변수안에 grades 객체의 key값만 담았기 때문이다.

var grades = { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 };
for(key in grades) {
  console.log(grades[key]);
}
// 10 6 80


var grades = { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 };
for(var name in grades) {
  document.write(`key : ${name} value : ${grades[name]} <br>`)
}