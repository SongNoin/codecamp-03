// student와 school 두 개의 객체가 있습니다.
// student 객체에 school이라는 객체를 할당해야 합니다.

// - 객체 안에 객체를 만들 수 있습니다.

let student = {
  name: "철수",
  age: 8,
  school: "",
};

let school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = school;

student;
