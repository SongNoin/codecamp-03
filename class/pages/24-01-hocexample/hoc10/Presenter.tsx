import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

function withAuth(Component) {
  return function 이름은상관없음(props) {
    return <Component {...props} />;
  };
}

const withAuth = (Component) => (props) => {
  // 검증로직, 셋팅로직 (로직만 추가)

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);
