import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SideBarUI from "./side.presenter";
import { FETCH_USER_LOGGEDIN } from "./side.queries";

export default function Sidebar() {
  const [market, setMarket] = useState(true);
  const [point, setPoint] = useState(false);
  const [profile, setProfile] = useState(false);

  const router = useRouter();
  function onClcikMoveToMyMarket() {
    setMarket(true);
    setPoint(false);
    setProfile(false);

    router.push("/mypage/mymarket");
  }
  function onClickMoveToMyPoint() {
    setMarket(false);
    setPoint(true);
    setProfile(false);

    router.push("/mypage/mypoint");
  }
  function onClickMoveToMyProfile() {
    setMarket(false);
    setPoint(false);
    setProfile(true);

    router.push("/mypage/myprofile");
  }

  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  return (
    <SideBarUI
      data={data}
      market={market}
      point={point}
      profile={profile}
      onClcikMoveToMyMarket={onClcikMoveToMyMarket}
      onClickMoveToMyPoint={onClickMoveToMyPoint}
      onClickMoveToMyProfile={onClickMoveToMyProfile}
    />
  );
}
