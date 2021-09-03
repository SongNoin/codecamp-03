const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

let count = 0; //물품을 구매한 횟수를 담아주는변수
let price = 0; //총가격을 담아주는 변수
let grade = ""; //최종 등급을 담아주는 변수

for (let i = 0; i < myShopping.length; i = i + 1) {
  if (myShopping[i].category === "의류") {
    count = count + 1;
    price = price + myShopping[i].price;

    if (count >= 0 && count <= 2) {
      grade = "bronze";
    } else if (count >= 3 && count <= 4) {
      grade = "silver";
    } else if (count >= 5) {
      grade = "gold";
    }
  }
}

console.log(
  "의류를 구매한 횟수는 총" +
    count +
    "회 금액은" +
    price +
    "원이며 등급은" +
    grade +
    "입니다"
);
