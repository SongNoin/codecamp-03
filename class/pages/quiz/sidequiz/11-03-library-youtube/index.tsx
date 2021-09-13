import { Rate } from "antd";
import { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

// 위쪽에 넣는 기준  - 하드코딩 (한번만들고 두번다시 거치지 않을 것들)
// 이유 - state가 바뀌면 컴포넌트가 다시 한번 도니까 값이 바뀌지 않을것들은 밖에 있어야한다.
export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  //   const aaa = 3; // 자신과 가장 가까운 중괄호안에잇는 aaa 를찾고 없으면 다음 중괄호에서 찾는다.

  const handleChange = (value) => {
    // value 는 화살표로 된 중괄호 안의 value 다!
    // console.log(aaa); // 가장 가까운 중괄호안에있는 aaa

    setValue(value);
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {/* 텍스트 부분 {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""} */}
    </span>
  );
}