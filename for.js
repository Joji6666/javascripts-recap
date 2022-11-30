// 기본 반복문
// 첫번 째 변수를 선언한 후
// 두번 째 조건이 false가 되기 전까지 코드를 실행해라
// 세번 째 i++ 는 i를 1씩 더해라
for (var i = 0; i < 10; i++) {
  console.log("나는 그랩이다"); //총 10번 호출이 됩니다.
}

// * 주의 : 마지막 ++ 구문에는 ;를 붙이지 않습니다.

//Array를 활용한 반복문
var products = ["농구공", "축구공"];
for (var i = 0; i < products.length; i++) {
  var name = products[i]; //i는 0, 1이 차레대로 들어갑니다. array의 1번째, 2번째 값을 가져옵니다.
  console.log(name);
}
