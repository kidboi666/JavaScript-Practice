var arr = []
for(var i = 0; i < 5; i++) {
  arr[i] = function() {
    return i;
  }
}
for(var index in arr) {
  console.log(arr[index]());
}



var arr2 = []
for(var i = 0; i < 5; i++) {
  arr2[i] = function(id) {
    return id
  }(i);
}
for(var index in arr2) {
 console.log(arr2[index])
}

// 아어 시발 모르겠다


var arr = []
for(i = 0; i < 5; i++) {
  arr[i] = function(id) {  // for문 안에서 선언된 함수. 
    return function() {
      return id;
    }
  }(i);
}

for(var index in arr) {
  console.log(arr[index]());
}

// 부족한거 1. arr[i] 가 i를 대입한다는 뜻인건지
// 부족한거 2. return의 정확한 의미.
// 부족한거 3. for(var index in arr) .. for in 문