//p.394 ~ 398

//클래스 선언!
//객체들을 정의하고 그러한 객체를 활용해서 프로그램을 만드는 것을 객체 지향 프로그래밍(object oriented programming)
//개발자들이 프로그래밍 언어에 객체를 더 효율적으로 만들 수 있는 문법을 추가하기 시작함

// 클래스(Class), 프로토타입(prototype) 2가지 문법으로 객체를 효율적으로 만듬
// 클래스는 객체를 만들 때 수많은 지원을 하는 대신 많은 제한을 거는 문법
// 프로토타입은 제한을 많이 하지 않지만 , 대신 지원도 별로 하지 않음

//클래스 형태

// class 클래스 이름 {
//
//}

//클래스 기반으로 만든 객체는 전문 용어로 인스턴스(instance)라고 부름 == 객체
//인스턴스를 생성 할때는 다음과 같은 문법을 사용
// new 클래스 이름()
// 보통 붕아빵 틀 = 클래스 , 실체화된 붕어빵 = 인스턴스 비유

// ----------------------------------------------------------------

//클래스 선언하고 인스턴스 생성하기

// class Student {}

// const student = new Student();

// const Student = [new Student(), new Student(), new Student(), new Student()];

// 클래스 선언시 이름은 첫글자를 대문자로 지정하는 것이 개발자들의 약속

// ----------------------------------------------------------------

// 생성자

// new Student() ==> 이는 객체가 생성될 때 호출되는 '생성자'(constructor)라는 이름의 함수

// class 클래스 이름{
//   constructor(){
//     /* 생성자 코드 */
//   }

// ----------------------------------------------------------------

//생성자 함수와 속성 추가하기
/*
//클래스 선언
class Student {
  constructor(이름, 국어, 영어, 수학, 과학) {
    this.이름 = 이름;
    this.국어 = 국어;
    this.영어 = 영어;
    this.수학 = 수학;
    this.과학 = 과학;
  }
}

//객체 선언
const studnets = [];
studnets.push(new Student("구름", 87, 98, 88, 90));
studnets.push(new Student("별이", 92, 98, 96, 88));
studnets.push(new Student("겨울", 76, 96, 94, 86));
studnets.push(new Student("바다", 98, 52, 98, 92));

console.log(studnets);
*/
// ----------------------------------------------------------------

//메소드(method) : class 안에 추가하면 내부적으로 메소드가 중복 되지 않고 하나만 생성되어 활용

//클래스 선언
class Student {
  constructor(이름, 국어, 영어, 수학, 과학) {
    this.이름 = 이름;
    this.국어 = 국어;
    this.영어 = 영어;
    this.수학 = 수학;
    this.과학 = 과학;
  }
  //처음 코드를 입력 할 때 메소드 사이에 쉼표를 넣는 실수를 하는 경우가 있는데 쉼표가 있으면 안됨.
  getSum() {
    return this.국어 + this.영어 + this.수학 + this.과학;
  }
  getAverage() {
    return this.getSum() / 4;
  }
  toString() {
    return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`;
  }
}

//객체 선언
const studnets = [];
studnets.push(new Student("구름", 87, 98, 88, 90));
studnets.push(new Student("별이", 92, 98, 96, 88));
studnets.push(new Student("겨울", 76, 96, 94, 86));
studnets.push(new Student("바다", 98, 52, 98, 92));

let output = "이름\t총점\t평균\n";
for (const s of studnets) {
  output += s.toString();
}
console.log(output);
