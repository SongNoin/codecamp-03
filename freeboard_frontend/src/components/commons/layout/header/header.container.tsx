import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();

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
  return (
    <HeaderUI
      onClickMain={onClickMain}
      onClickList={onClickList}
      onClickGames={onClickGames}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
