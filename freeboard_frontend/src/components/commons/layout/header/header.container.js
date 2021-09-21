import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  function onClickList() {
    router.push(`/boards/list/`);
  }
  return <HeaderUI onClickList={onClickList} />;
}
