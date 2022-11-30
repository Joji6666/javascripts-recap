//기본 연산자 (산술 연산자, 문자열 연산지)
var num1 = 1;
var num2 = 2;
var char1 = "멋진";
var char2 = "김진";
var num3 = num1 + num2; //숫자 + 숫자 , 결과 : 3
var char3 = char1 + " " + char2; //문자열 + 문자열 , 결과 : 멋진 김진
var charNumMixed = char1 + num1; //문자열 + 숫자 , 결과 : 멋진 1

//비교연산자 (>, <, <=, >=, ===, !==)로 boolean 값을 반환한다.
var name = "김진";
var isHandsome = false;
var num = 100;

console.log(num < 5); //값의 크기를 비교, 결과 : false
console.log(name === "김진"); //값이 일치하는 지를 비교, 결과 : true
console.log(name !== "홍길동"); //값이 일치하지 않는 지를 비교, 결과 : true

//부정 연산자 !, true <-> false 로 반환한다.
var nope = false;
var yes = !nope; //true

// 논리연산자
var name = "김진";
var age = 28;

// &&는 앞의 연산 결과가 true일 때 뒤 연산을 수행함
console.log(name === "김진" && age > 25); // 결과 : true
console.log(name === "김진" && age > 30); // 결과 : false

// ||는 앞이 연산 결과가 true라면 뒤 연산을 실행하지 않음
console.log(name === "김진" || age < 30); //결과 : true

// ||는 앞의 연산 결과가 false라면 뒤 연산을 수행함
console.log(name !== "김진" || age > 25); //결과 : true

var nope = false;
var yes = true;
console.log(nope || yes); //결과 : true
console.log(nope && yes); //결과 : false
