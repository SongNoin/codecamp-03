import { memo } from "react"; // 리액트의 기능

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링 되었습니다!");
  return (
    <>
      <div>=============================</div>
      <div>이것은 프리젠터입니다!!!</div>
      <div>=============================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
// memo기능을 사용하면 재 렌더링 되지 않는다 (주로 속도,성능 차이를 위해서)

// 메모를 했다해도 바뀌는 props가 있다면 재 렌더링 된다.
