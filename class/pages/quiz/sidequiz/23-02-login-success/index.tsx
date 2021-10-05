import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../_app";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;

export default function QuizLoginSuccessPage() {
  const { setUserInfo, userInfo } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  useEffect(() => {
    // if (!accessToken) {
    //   alert("로그인을 먼저 해주세요.");
    //   router.push("/quiz/sidequiz/23-01-login");
    // }
    if (userInfo.email) return;

    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);

  return (
    <>
      <div>로그인에 성공했습니다</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </>
  );
}
