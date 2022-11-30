//sayHello라는 함수를 선언하기

//첫 번째 방식 - 함수 선언식이라고 함
function sayHello() {
  console.log("say Hello!");
}

//두 번째 방식 - 함수 표현식이라고 함
const sayHello = function () {
  console.log("say Hello!");
};

//선언된 sayHello 함수를 사용한다.
sayHello(); //say Hello! 가 출력됨

function calculate(x) {
  //여기서 x를 파라미터(입력값)라고 한다.
  var result = 3 * x + 5;
  console.log("결과 값은 " + result + "입니다");
}
var result = calculate(5); //결과 값은 20입니다.

var getAge = function (name, age) {
  //파라미터는 여러 개 넣어도 됩니다.
  console.log(name + "은 " + age + "살입니다.");
};
getAge("김진", 28); //김진은 28살입니다.

function calculate(x) {
  //함수를 실행했을 때 return이 있어야지만 값을 얻을 수 있다.
  var result = 3 * x + 5;
  return result;
}
var value1 = calculate(5); //calculate를 호출하면 20의 결과값을 반환합니다.
var value2 = calculate(10); //calculate를 호출하면 35의 결과값을 반환합니다.
console.log(value1);
console.log(value2);

//입력한 파라미터를 profile 객체로 만들어주는 함수
function getProfile(profile_name, profile_age) {
  return {
    //여기선 객체를 return해요.
    name: profile_name,
    age: profile_age,
  };
}
var profile = getProfile("철수", 28); //name, age를 key로 가지는 객체를 받습니다.
console.log(profile.name); //철수가 출력된다.

function sayHello() {
  console.log("실행 O");
  return;
  console.log("실행 X"); //return 아래에 있는 코드는 실행되지 않음
}

sayHello();
