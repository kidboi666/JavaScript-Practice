function outter() {
  function inner() {
    var title = 'coding everybody';
    alert(title);
  }
  inner();
}
outter();

// 함수 outter의 내부에는 함수 inner가 정의 되어 있다. 함수 inner를 내부 함수라고 한다. 내부함수는 외부함수의 지역변수에 접근할 수 있다.



function outter() {
  var title = 'coding everybody';
  function inner() {
    alert(title);
  }
  inner();
}
outter();

//내부 함수 inner에서 title을 호출했을 때 외부함수인 outter의 지역변수에 접근할 수 있음을 보여준다.