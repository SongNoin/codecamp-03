import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";

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
  return (
    <HeaderUI
      onClickMain={onClickMain}
      onClickList={onClickList}
      onClickGames={onClickGames}
    />
  );
}
