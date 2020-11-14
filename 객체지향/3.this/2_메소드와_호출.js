var o = {
  func : function() {
    if(o === this) {
      document.write("o === this");
    }
  }
}
o.func();

window.func()
// 함수를 호출했을때 this의 값이 window가 되는 것과
o.func()
// 어떤 메소드를 호출했을때 그 this의 값이 그 메소드의 소속인 객체를 가리킨다는 것이 같은 얘기이다.document

// 함수는 window라는것이 암시적으로 사용되기 때문에 함수를 호출하는 것과 메소드를 호출하는것이 다르다고 느낄 뿐이다.