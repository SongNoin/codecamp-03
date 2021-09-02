import { useState } from "react";

export default function VerificationCode() {
  const [number, setRandom] = useState("000000");
  function aaa() {
    let Auth = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("number").innerText = Auth;
  }

  return (
    <>
      <div id="number">{number}</div>
      <button onClick={aaa}>인증번호생성</button>
    </>
  );
}
