import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SideBarUI from "./side.presenter";
import { FETCH_USER_LOGGEDIN } from "./side.queries";

export default function Sidebar() {
  const [isPointOpen, setIsPointOpen] = useState(false);

  const router = useRouter();
  const isClicked = router.pathname;
  function onClcikMoveToMyMarket() {
    router.push("/mypage/mymarket");
  }

  function onClickMoveToMyPoint() {
    router.push("/mypage/mypoint");
  }

  function onClickMoveToMyProfile() {
    router.push("/mypage/myprofile");
  }

  function onToglePoint() {
    setIsPointOpen((prev) => !prev);
  }

  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  return (
    <SideBarUI
      data={data}
      isClicked={isClicked}
      isPointOpen={isPointOpen}
      onClcikMoveToMyMarket={onClcikMoveToMyMarket}
      onClickMoveToMyPoint={onClickMoveToMyPoint}
      onClickMoveToMyProfile={onClickMoveToMyProfile}
      onToglePoint={onToglePoint}
    />
  );
}
