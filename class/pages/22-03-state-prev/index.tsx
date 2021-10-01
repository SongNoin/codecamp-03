import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  //   function onClickButton() {
  //     setCount((prev) => prev + 1);
  //   }

  function onClickButton() {
    setCount((asdasdasdasdasda) => {
      const aaa = 33;
      let bbb = 22;
      // 아무 로직 쓰기
      return asdasdasdasdasda + 1;
    });
  } // 화살표함수가 아닌 일반 함수 넣어도 됨

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
