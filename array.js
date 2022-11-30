var names = ["철이", "미애"]; //array 자료형 []
var age = [15, 16]; //array 안에는 모든 자료형을 넣을 수 있다.
var arrayInArray = [
  [0, 1, 2],
  [3, 4, 5],
]; //array안에 array도 가능하다.

//names의 길이를 알고 싶다면?
var length = names.length;

//names의 첫번째 인자의 값에 접근하고 싶다면?
var firstValue = names[0]; //프로그래밍 세계에서 1번째는 숫자 0부터 시작한다.
var secondValue = names[1];

//names에 새로운 값을 추가하고 싶다면?
names[2] = "홍철"; //array의 3번째에 값을 넣는다. 선호하지는 않는 방식이다.
names.push("짱구"); //array의 마지막에 '짱구' 값을 넣습니다. array에 값 추가할 때 선호하는 방식이다.
