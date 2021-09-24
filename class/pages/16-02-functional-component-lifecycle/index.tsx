import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FunctioanlComponentLifecyclePage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>();

  // const [state, setState] = useState({
  //     count : 0
  // })

  // componentDidMount 와 동일

  useEffect(() => {
    console.log("컴포넌트 마운트 완료!!");
    inputRef.current.focus();

    // componentWillUnmount 와 동일
    return () => {
      console.log("잘가요~~");
    };
  }, []);
  // [] 를 넣어주면 의존성배열이라고 한다.
  // 한번실행하고 의존성배열에 따라 재실행 여부를 결정할 수 있다.

  // componentDidUpdate 와 동일
  useEffect(() => {
    console.log("컴포넌트 수정 완료!!");
  });

  // setState 와 useEffect
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, []); // 왠만하면 안쓰는 것이 좋은 함수인 이유 :
  // 추가적인 렌더링이 발생할 수 있으므로 성능에 좋지 않은 영향을 끼칠 수 있다

  // setState 와 useEffect의 dependency-array
  //   useEffect(() => {
  //     setCount((prev) => prev + 1);
  //   }, [count]);
  // [] 안의 값이 바뀌면 또 그려지기 (무한루프에 빠질수 있다.)

  function onClickCount() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      현재카운트 : {count}
      <button onClick={onClickCount}>카운트증가!!</button>
      <button onClick={onClickMove}>페이지이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
