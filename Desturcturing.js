// Desturcturing(구조 분해 할당)

// 객체와 배열에 들어있는 값을 가져올 때 Desturcturing 기능을 사용하면 손쉽게 값을 뽑아낼 수 있습니다.

// [기존]

const kimjin = {
  name: "김진",
  age: 28,
};
const people = ["민수", "철수"];

//기존
var name = kimjin.name;
var age = kimjin.age;
var minsoo = people[0];
var chulsoo = people[1];

console.log(name); // 김진

console.log(minsoo); // 민수
// [Destructuring 방식]

var { name, age } = grab;
console.log(name); //김진이 출력됩니다.
console.log(age); // 28

const [minsoo, chulsoo] = people;

console.log(chulsoo); // 철수 출력
