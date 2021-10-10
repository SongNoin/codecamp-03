import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./market-detail.presenter";
import { FETCH_USEDITEM } from "./market-detail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.number,
    },
  });

  function onClickMoveToMarketList() {
    router.push("/market/market-list");
  }

  function onClickMoveToEdit() {
    router.push(`/market/market-detail/${router.query.number}/edit`);
  }
  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
