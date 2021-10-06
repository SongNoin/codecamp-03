import { withAuth } from "../../../../src/commons/example/hoc/withAuth";

const Mainpage = () => {
  return <div>메인페이지입니다.</div>;
};

export default withAuth(Mainpage);
