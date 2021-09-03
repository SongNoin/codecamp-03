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

let count = myShopping.length;

for (let i = 0; i < myShopping.length; i++) {
  let price = 0;
  price = price + myShopping[i].price;
}

if (5 <= myShopping.length) {
  console.log("Gold");
} else if (3 <= myShopping.length <= 4) {
  console.log("Silver");
} else if (0 <= myShopping.length <= 2) {
  console.log("Bronze");
}

console.log(
  "의류를 구매한 횟수는 총" +
    count +
    "회 금액은" +
    price +
    "원이며 등급은" +
    +"입니다."
);
