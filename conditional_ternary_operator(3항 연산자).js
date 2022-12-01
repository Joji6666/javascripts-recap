// conditional ternary operator(3항 연산자)

// 3항 연산자는 if 조건문을 단축 형태로 사용할 수 있습니다.

const js = "javascript";

// 기존 if문

if (js === "javascript") {
  console.log("재밌다");
} else {
  console.log("재미없다");
}

// 3항 연산자 방식

// condition ? exprIfTrue : exprIfFalse 구문으로
// condition이 true라면 exprtIfTrue가 실행되고 아니라면 exprtIfFalse가 실행됩니다.

js === "javascript" ? console.log("재밌다") : console.log("재미없다"); // 재밌다 출력

//아래와 같이 많이 활용됩니다.
const isJavascript = js === "javascript" ? true : false;

console.log(isJavascript); //true 출력
//result에 true가 들어옵니다.
