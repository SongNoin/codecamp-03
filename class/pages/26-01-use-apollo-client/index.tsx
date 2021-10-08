import { gql, useApolloClient, useMutation } from "@apollo/client";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;
export default function UseApolloClient() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);

  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  // data 는 매개변수이기에 마음대로 바꿔도 된다.
  async function onClickLogin(aaa) {
    // 로그인 처리하기 !!
    const result = await loginUser({
      variables: {
        email: aaa.myEmail,
        password: aaa.myPassword,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    // const result = axios.get("/koreajson.com");
    const resultUserInfo = await client.query({
      // variables는 필요없다
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }
  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일 : <input type="text" {...register("myEmail")} />
          비밀번호 : <input type="text" {...register("myPassword")} />
          <button>로그인하기</button>
          {/* <button type="button" onClick={myOnClickFunction}>버튼</button> */}
        </form>
      )}
    </>
  );
}
