import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import SideBarUI from "./side.presenter";
import { FETCH_USER_LOGGEDIN } from "./side.queries";

export default function Sidebar() {
  const router = useRouter();
  function onClcikMoveToMyMarket() {
    router.push("/mypage/mymarket");
  }
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  return (
    <SideBarUI data={data} onClcikMoveToMyMarket={onClcikMoveToMyMarket} />
  );
}
