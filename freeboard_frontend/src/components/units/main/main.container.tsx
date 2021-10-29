import { useRouter } from "next/router";
import MainUI from "./main.presenter";

export default function Main() {
  const router = useRouter();
  function onClickMoveToBoard() {
    router.push(`/boards/list/`);
  }
  function onClickMoveToMarket() {
    router.push(`/market/market-list`);
  }
  function onClickMoveToSignUp() {
    router.push(`/signup/`);
  }
  return (
    <MainUI
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToMarket={onClickMoveToMarket}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
