function a () {
  i = 0; // i는 전역 변수가 된다
}
for(var i = 0; i < 5; i++) { // 이곳의 i도 전역 변수가 된다.
  a();
  document.write(i);
}

// 전역 변수는 각기 다른 로직에서 사용하는 같은 이름의 변수값을 변경시켜서 의도하지 않은 문제를 발생시킨다.