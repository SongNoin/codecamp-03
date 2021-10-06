import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!accessToken) {
      alert("로그인 한 사람만 입장가능합니다.");
      router.push("/23-01-login");
    }
  }, []);
  // accessToken 이 있는가?!
  // accessTokn이 없다면, login 페이지로 보내기!!

  return <Component {...props} />;
};
