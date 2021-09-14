import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // setCount(count + 1);
    //setCount(count + 1); 를 많이 쓴다해도 임시저장공간에 하나만 저장 되기 때문에 여러개 카운트 되지는 않는다.

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // 하지만 setCount((prev) => prev + 1); 는 많이쓴다면 임시저장공간 상관없이 저장되기 때문에 여러개 카운트 된다.
  }

  return (
    <div>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </div>
  );
}
