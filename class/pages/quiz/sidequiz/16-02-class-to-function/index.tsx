import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function ClassToFunction() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    inputRef.current.focus();

    // componentWillUnmount 와 동일
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);
  // [] 를 넣어주면 의존성배열이라고 한다.
  // 한번실행하고 의존성배열에 따라 재실행 여부를 결정할 수 있다.

  // componentDidUpdate 와 동일
  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  });

  function onClickCount() {
    setCount((prev) => prev + 1);
  }
  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCount}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
