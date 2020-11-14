function sum() {
  var i, _sum = 0;
  for(i = 0; i < arguments.length; i++) {
    document.write(i+' : '+arguments[i]+'<br>');
    _sum += arguments[i];
  }
  return _sum;
}
document.write('result : ' + sum(1, 2, 3, 4));

// 함수 sum은 인자로 전달된 값을 모두 더해서 리턴하는 함수다. 하지만 함수 sum은 인자에 대한 정의가 없다. 하지만 마지막 라인에서 4개의 숫자 인자를 함수 sum으로 전달하고 있다. 함수의 정의 부분에서 인자에 대한 구현이 없음에도 인자를 전달 할 수 있는 것은 왜 그럴까? 그것은 arguments 라는 특수한 배열이 있기 때문이다.

// arguments는 함수 안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열이다. arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있다. 또 arguments.length를 이용해서 함수로 전달된 인자의 개수를 알아낼 수도 있다. 이러한 특성에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있다. 그 값을 더 해서 리턴하면 인자로 전달된 값에 대한 총합을 구하는 함수를 만들 수 있다.