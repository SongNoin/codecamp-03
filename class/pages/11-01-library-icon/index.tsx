import { ScissorOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
// 복사해온 아이콘 이름과 똑같은 것을 import 해오기

const MyIcon = styled(ScissorOutlined)`
  font-size: 500px;
  color: yellowgreen;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
      {/* id={data._id} 아이콘에서는 이렇게 id 주면 사라지기떄문에 왠만하면 쓰지않는다.*/}
    </div>
  );
}
