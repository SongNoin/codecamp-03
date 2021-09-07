export default function MapFruitsPage() {
  let fruits = [
    { number: 1, title: "레드향" }, //<div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, //<div>2 샤인머스캣</div>
    { number: 3, title: "산청딸기" }, //<div>3 산청딸기</div>
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];

  //   const aaa = fruits.map((el) => (
  //     <div>
  //       <span>{el.number}</span> <h1>{el.title}</h1>
  //     </div>
  //   ));
  // 여기에도 써도됨

  //const aaa = [<div> 1 레드향 </div>, <div> 2샤인머스캣</div>, ...]
  return (
    //<div>{aaa}</div> 위에 쓴다면 이렇게!
    <div>
      {fruits.map((el) => (
        <div>
          <span>{el.number}</span>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
}
