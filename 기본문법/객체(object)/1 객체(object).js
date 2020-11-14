// 배열이라는 것과 유사
// 배열은 연관 데이터들을 담아내기 위한 일종의 그릇
// 객체 또한 연관된 데이터들을 담아내기 위한 그릇
// 차이점은 배열은 자동으로 숫자 식별자가 데이터에 할당되는데 객체는 그 식별자를 숫자가 아닌 문자를 쓸 수 있다.

// 객체를 만드는 방법은 다음과 같다.
var grades = { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 };
//                key   value
// or
var grades = {
  'egoing': 10,
  'k8805': 6,
  'sorialgi': 80,
}
// or
var grades = {}; // 비어있는 객체를 만들고
grades['egoing'] = 10; // 변수명으로 객체에 접근하고 대괄호 안에 프로퍼티를 넣은뒤 값을 할당한다.
grades['k8805'] = 10;
grades['sorialgi'] = 10;
// or
var grades = new Object(); // new Object() 와 중괄호는 같은 의미라 보면 된다.
grades['egoing'] = 10;
grades['k8805'] = 10;
grades['sorialgi'] = 10;

// 가져오는 방법은 다음과 같다.

grades['egoing'] // 10
grades['k8805'] // 6
grades.k8805 // 6
grades['k88'+'05'] // 6
grades.'k88'+'05'; // syntax.error

// js에선 값을 담는 그릇이라는 관점으로 시작해,
// 프로그램을 구조적이고 부품으로써 사용할 수 있는 로직을 만들 수 있는 단위로
// 객체를 바라보는 시각을 점진적으로 확장해 나가자