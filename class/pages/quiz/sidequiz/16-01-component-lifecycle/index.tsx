import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

export default function FunctionalComponentLifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    alert("Rendered!");
    inputRef.current.focus();
    // componentWillUnmount 와 동일
    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    alert("Changed!!");
  });

  function onClickChange() {
    setIsChange(true);
  }

  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
      <input type="text" ref={inputRef} />
    </>
  );
}
