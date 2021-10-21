import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { FETCH_USER_LOGGED_IN } from "./header.queies";
import { useQuery } from "@apollo/client";

export default function Header() {
  const { accessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPointOpen, setIsPointOpen] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    // if (!accessToken) {
    //   alert("로그인을 먼저 해주세요.");
    //   router.push("/quiz/sidequiz/23-01-login");
    // }
    if (accessToken) return;

    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);

  function onClickMain() {
    router.push(`/`);
  }

  function onClickList() {
    router.push(`/boards/list/`);
  }

  function onClickGames() {
    router.push(`/games/`);
  }

  function onClickMoveToSignUp() {
    router.push(`/signup/`);
  }

  function onClickMoveToMyPage() {
    router.push(`/mypage/mymarket`);
  }
  function onClickMoveToMarket() {
    router.push(`/market/market-list`);
  }
  function onTogleLogin() {
    setIsLoginOpen((prev) => !prev);
  }

  function onToglePoint() {
    setIsPointOpen((prev) => !prev);
  }

  return (
    <HeaderUI
      onClickMain={onClickMain}
      onClickList={onClickList}
      onClickGames={onClickGames}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickMoveToMarket={onClickMoveToMarket}
      isLoginOpen={isLoginOpen}
      onTogleLogin={onTogleLogin}
      isPointOpen={isPointOpen}
      onToglePoint={onToglePoint}
      accessToken={accessToken}
      onClickMoveToMyPage={onClickMoveToMyPage}
      data={data}
    />
  );
}
