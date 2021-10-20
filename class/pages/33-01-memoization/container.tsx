import { useMemo, useCallback, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 되었습니다!");
  let countLet = 0; // let 으로 선언했으면 컴포넌트가 다시 그려지지 않기 때문에 올라가지 않는다.
  const [countState, setCountState] = useState(0);
  // useState의 값이 바뀔때는 컴포넌트가 다시 렌더링 된다.
  // 자식도 다시 렌더링된다(부모는 되지않는다)
  //* https://medium.com/@freshmilkdev/reactjs-render-optimization-for-collapsible-material-ui-long-list-with-checkboxes-231b36892e20

  const randomValue = useMemo(() => Math.random(), []); // useMemo를 사용하면 기록된다. // useMemo는 함수도 기억가능!
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet = countLet + 1;
  }, []);

  const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>카운트(let) : {countLet} </div>
      <button onClick={onClickCountLet}>카운트(let) +1</button>

      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1</button>

      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
