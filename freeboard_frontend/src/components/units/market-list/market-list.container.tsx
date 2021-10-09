import { useRouter } from "next/router";
import MarKetListUI from "./market-list.presenter";

export default function MarKetList() {
  const router = useRouter();

  function onClickMoveToMarketWrite() {
    router.push("/market/market-write");
  }
  return <MarKetListUI onClickMoveToMarketWrite={onClickMoveToMarketWrite} />;
}
