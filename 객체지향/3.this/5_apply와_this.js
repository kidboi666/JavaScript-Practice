var o = {}
var p = {}
function func() {
  switch(this) { // if - switch문  , for - while문 과 같은 대체제
    case o:
      document.write('o<br>');
      break;
    case p:
      document.write('p<br>');
      break;
    case window:
      document.write('window<br>');
      break;
  }
}
func();
func.apply(o); // func라는 함수가 실행되면서 함수 안에 this의 값은 첫번째 인자로 지정한 값이 this가 된다.
func.apply(p);

// 전통적인 객체지향에서 메소드라고 하는것은 어떠한 객체의 강하게 소속되어 있는 것이다. 그래서 그 메소드는 다른 곳에 가지 못한다. 
// 객체 - 주인 (master)
// 메소드는 - 종속된 노인?? (slave)

// window 객체            함수
// o 객체                 함수 
// p 객채                 함수

// 호출되는 것에 따라 주인이 바뀜.

// 자바스크립트에서 함수는 일반적인 객체지향 언어의 메소드보다 훨씬 더 위상이 높다는 것이고 어떻게 호출하냐에 따라 맥락적으로 함수는 어떠한 객체의 종속되는 존재이기도 하다.

// 그 함수가 누구의 소속이냐에 따라 this의 값은 그 소속의 객체를 가리킨다.