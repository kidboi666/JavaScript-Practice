
//아래는 JAVA 언어의 예시다.

// for(int i = 0; i < 10; i++){
//   String name = "egoing";
// }
// System.out.println(name);

//자바에서는 for문 안에서 선언된 지역변수를 for문 밖에 println 명령어로 호출하여 에러가 난다. 여기서 name 변수는 for 문 안에서만 작동하는 지역 변수로 중괄호가 닫히면 기능하지 않는다.


//아래는 Java Script의 예시다.

for(var i = 0; i < 1; i++){
  var name = 'coding everybody';
}
alert(name);

// Java Script에서는 for문 안에서 선언된 변수는 전역 변수로서 기능한다. 고로 for문(,if문) 밖에서도 alert 명령어가 작동한다. Java Script 에서는 함수 안에서만 지역 변수의 기능이 작동한다.