import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인한사람만 입장가능합니다.");
      router.push("/quiz/example/login");
    }
  }, []);

  return <Component {...props} />;
};
