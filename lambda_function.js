// [기존]

//함수 선언식
function getName(name) {
  return `${name} 입니다`;
}
console.log(getName("김진"));

// [람다 함수 방식]

const getName2 = (name) => {
  console.log(`${name}입니다.`);
};

console.log(getName2("김진"));

//람다식의 return 문을 생략할 수도 있습니다.
const getName3 = (name) => `${name} 입니다`;

console.log(getName3("김진"));
