import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { FETCH_USER_LOGGED_IN } from "./header.queies";
import { useQuery } from "@apollo/client";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

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

  function onClickMoveToMarket() {
    router.push(`/market/market-list`);
  }
  function onTogleLogin() {
    setIsOpen((prev) => !prev);
  }

  return (
    <HeaderUI
      onClickMain={onClickMain}
      onClickList={onClickList}
      onClickGames={onClickGames}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickMoveToMarket={onClickMoveToMarket}
      isOpen={isOpen}
      onTogleLogin={onTogleLogin}
      userInfo={userInfo}
    />
  );
}
