//객체 형태
{ 
	key1 : value1,
	key2 : value2,
}

//실제 객체 사용
var im = {
    name: '김진',
    age: '28',
    from : '원주'
}

// im의 name 값을 얻고 싶다면?
var myName= im['name']; //array에서 값을 가져오는 방식처럼 안에 key값을 넣는다.
var myName2 = im.name //객체.key 로 접근할 수도 있다.

//im에 새로운 값을 추가, 변경하고 싶다면?
im['name'] = '철수'; //값 변경1
im.name = '짱구'; //값 변경2
im['hobby'] = '스케이트보드'; //값 추가1
im.favoriteFood = '삼겹살'; //값 추가2

