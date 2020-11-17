function Ultra() {} // Ultra 함수 생성
Ultra.prototype.ultraProp = true; // Ultra 함수의 속성 추가

function Super() {} // Super 함수 생성
Super.prototype = new Ultra(); // Ultra 함수를 부모로 상속받음
//                                                           / prototype
function Sub() {} // Sub 함수 생성                             / chain
Sub.prototype = new Super(); // Super 함수를 부모로 상속받음

var o = new Sub(); // Sub 함수를 o 변수에 집어넣음
console.log(o.ultraProp); // Sub 함수의 ultraProp 속성 호출
// ultraProp은 Sub의 부모인 Super의 부모인 Ultra의 속성인 true이므로 true 출력;ㅅㅂ

// Sub라는 함수는 객체이기 떄문에 프로퍼티를 가질 수 있고 그 중엔 prototype이라는 특수한 프로퍼티가 있고 그 안에는 어떠한 객체가 정의가 되어있다.

var o = new Sub();
// new를 이용해서 생성자 Sub를 호출하게 되면 자바스크립트는 생성자 Sub의 프로퍼티 prototype의 객체를 꺼내서 리턴해주게된다.

// 한국어로는 '원형' 정도로 번역되는 prototype은 말 그대로 객체의 원형이라고 할 수 있다. 함수는 객체다. 그러므로 생성자로 사용될 함수도 객체다. 객체는 프로퍼티를 가질 수 있는데 prototype이라는 프로퍼티는 그 용도가 약속되어 있는 특수한 프로퍼티다. prototype에 저장된 속성들은 생성자를 통해서 객체가 만들어질 때 그 객체에 연결된다.