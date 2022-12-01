// Template Literal

// 일반적으로 string 자료형을 조합할 때 **+ 연산자**를 사용합니다. 그러나 문자열을 더하는 과정이 많아지면 + 연산자가 많아지고 띄어쓰기 같은 작업을 하기가 번거롭습니다. **이때 `Template Literal(템플릿 리터럴)`을 사용하면 더 쉽게 만들 수 있고 가독성이 높아집니다.**

// **특히** 프론트엔드 같이 데이터를 조합해서 DOM에 적용하는 경우가 많은 경우 유용하게 사용됩니다.

// **[기존]**

const hello = "안녕";
const introduce = "나는 김진이야!";
const age = 28;

//기존 방식
const text = hello + "! " + introduce + " 그리고 " + age + "살이야.";

console.log(text);

// [Template Literal 방식]

// `` 안에 변수를 넣을 때 ${}를 사용합니다.

const newText = `${hello}! ${introudce} 그리고 ${age}살이야`;

console.log(newText);

// `` 를 벡틱이라고 부릅니다.
