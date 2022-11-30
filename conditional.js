var name = "김진";
var age = 28;

//조건문 안에 true 혹은 특정 값이 들어있으면 내부 로직 수행함. (null, false, 0, "") 이면 수행X
if (name === "김진") {
  //true가 들어있기에 수행함
  console.log("김진 조건문");
}

if (age > 25) {
  //true가 들어있기에 수행함
  console.log("25살 이상");
}

var empty = "";
if (empty) {
  //빈 값은 false와 비슷한 의미. 수행하지 않음
  console.log("수행안됨");
}

var name2 = "김진";
var age2 = 28;

//if else else if
if (age2 > 25 && name2 === "철수") {
  //값이 false이므로 'he is fake'이 출력됨
  console.log("he is real");
} else {
  console.log("he is fake");
}

if (age > 30) {
  //값이 false이므로 else if 로직으로 넘어감
  console.log("30살 이상");
} else if (age > 25) {
  //값이 true이므로 내부 로직이 실행됨
  console.log("25살보다 많음");
} else {
  console.log("아직은 어린 나이");
}
