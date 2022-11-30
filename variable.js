var name; //name이라는 변수를 선언한다.
name = "김진"; //name이라고 선언된 변수에 "김진"이라는 값을 저장한다.

var name = "김진"; //합쳐서 이렇게 사용할 수 있다.

//var, let, const 차이
//1. var는 같은 이름의 변수를 다시 사용할 수 있다.. 요새는 var를 사용하지 않고 let, const만 사용하는 추세
var num1 = 20;
var num1 = "Bob";

//2. let은 한번 선언된 변수에 다시 새롭게 선언할 수 없다.
let num2 = 20;
num2 = "hello";
let num2 = "Bob"; // <- 에러!

//3. const는 선언된 변수에 새로운 값을 정의할 수 없어요. 변수 값이 더이상 변경되지 않도록 할때 사용한다.
const num3 = 30;
num3 = "Bob"; // <- 에러!
