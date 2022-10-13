//p.391 ~ 393
//객체의 기능을 메소드로 추가하기

//객체의 수가 늘어나면 함수 이름 충돌이 발생할 수 있음.
//이러한 문제를 해결하기 위해 함수이름을 getAverageOfStudent()처럼 의미를 알 수 있도록 길게 작성할 수 있지만
//그러면 코드의 가독성이 떨어지는 문제가 생김
//그래서 개발자들은 함수를 메소드로써 객체 내부에 넣어서 활용하는 방법을 사용하기 시작

const students = [];
students.push({ 이름: "구름", 국어: 97, 영어: 98, 수학: 88, 과학: 90 });
students.push({ 이름: "별이", 국어: 92, 영어: 98, 수학: 96, 과학: 88 });
students.push({ 이름: "겨울", 국어: 76, 영어: 96, 수학: 94, 과학: 86 });
students.push({ 이름: "바다", 국어: 98, 영어: 52, 수학: 98, 과학: 92 });

// students 배열 내부의 객체 모두에 메소드를 추가하기
for (const student of students) {
  student.getSum = function () {
    return this.국어 + this.영어 + this.수학 + this.과학;
  };
  student.getAverage = function () {
    return this.getSum() / 4;
  };
}

let output = "이름\t총점\t평균\n";
for (const s of students) {
  output += `${s.이름}\t${s.getSum()}점\t${s.getAverage()}점\n`;
}
console.log(output);

/*
//함수를 사용해서 객체를 찍어내보기 

//객체를 생성하는 함수
function createStudent(이름, 국어, 영어, 수학, 과학) {
  return {
    이름: 이름,
    국어: 국어,
    영어: 영어,
    수학: 수학,
    과학: 과학,
    getSum() {
      return this.국어 + this.영어 + this.수학 + this.과학;
    },
    getAverage() {
      return this.getSum() / 4;
    },
    toString() {
      return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`;
    },
  };
}
//객체 선언
const studnets = [];
studnets.push(createStudent("구름", 87, 98, 88, 90));
studnets.push(createStudent("별이", 92, 98, 96, 88));
studnets.push(createStudent("겨울", 76, 96, 94, 86));
studnets.push(createStudent("바다", 98, 52, 98, 92));

let output = "이름\t총점\t평균\n";
for (const s of studnets) {
  output += s.toString();
}
console.log(output);


// createStudent() 만들고 여기에 객체를 리턴하게 만듬
// 객체를 하나하나 만들 때와 비교해서 
// 1. 오탈자의 위험이 줄어듬
// 2. 코드를 입력하는 양이 줄어듬
// 3. 속성과 메소드를 한 함수에 내부에서 관리 할 수 있으므로 객체를 더 손쉽게 유지 보수 할 수 있음..

// 하지만 객체별로 getSum(), getAverage(), toString() 메소드를 생성하므로 함수라는 기본 자료형보다 무거운 자료형이 여러번 생성

*/
