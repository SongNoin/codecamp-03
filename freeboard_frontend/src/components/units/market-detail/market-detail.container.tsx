import { useRouter } from "next/router";
import MarketDetailUI from "./market-detail.presenter";

export default function MarketDetail() {
  const router = useRouter();

  function onClickMoveToMarketList() {
    router.push("/market/market-list");
  }
  return <MarketDetailUI onClickMoveToMarketList={onClickMoveToMarketList} />;
}
