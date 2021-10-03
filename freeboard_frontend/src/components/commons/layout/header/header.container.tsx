import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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

  function onTogleLogin() {
    setIsOpen((prev) => !prev);
  }
  return (
    <HeaderUI
      onClickMain={onClickMain}
      onClickList={onClickList}
      onClickGames={onClickGames}
      onClickMoveToSignUp={onClickMoveToSignUp}
      isOpen={isOpen}
      onTogleLogin={onTogleLogin}
    />
  );
}
