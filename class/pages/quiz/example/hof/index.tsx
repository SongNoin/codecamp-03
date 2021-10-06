export default function ExampleHof() {
  const onClickButton = (n) => (event) => {
    console.log(n);
  };

  return (
    <>
      <div>HOF 연습페이지 입니다.</div>
      <button onClick={onClickButton(123)}>클릭</button>
    </>
  );
}
