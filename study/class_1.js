// p.386 ~ 389

//모든 언어는 객체 지향(object oriented)이라는 패러다임을 기반으로 만들어진 프로그램 언어
//객체 지향 패러다임이란 객체를 우선적으로 생각해서 프로그램을 만든다는 방법론
//객체 지향 프로그래밍 언어들은 클래스 라는 문법으로 객체를 효율적이고 안전하게 만들어
//객체 지향 패러다임을 쉽게 프로그래밍에 적용할 수 있도록 도와줌

//객체 : 속성과 메소드를 갖는 것

// 같은 형태의 객체 만들기
// 추상화 => 필요한 정보만 추출하는 것

// 객체와 배열 조합하기
const students = [];
students.push({ 이름: "구름", 국어: 97, 영어: 98, 수학: 88, 과학: 90 });
students.push({ 이름: "별이", 국어: 92, 영어: 98, 수학: 96, 과학: 88 });
students.push({ 이름: "겨울", 국어: 76, 영어: 96, 수학: 94, 과학: 86 });
students.push({ 이름: "바다", 국어: 98, 영어: 52, 수학: 98, 과학: 92 });
console.log(JSON.stringify(students, null, 2));

// 각각의 객체에 학생들의 성적 총합과 평균을 구하는 기능 추가
let output = "이름\t총점\t평균\n";
for (const s of students) {
  const sum = s.국어 + s.영어 + s.수학 + s.과학;
  const average = sum / 4;
  output += `${s.이름}\t${sum}점\t${average}점\n`;
}
console.log(output);
