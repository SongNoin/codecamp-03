import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarKetListUI from "./market-list.presenter";
import { FETCH_USEDITEMS } from "./market-list.queries";

export default function MarKetList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });

  function onClickMoveToMarketWrite() {
    router.push("/market/market-write");
  }
  return (
    <MarKetListUI
      data={data}
      onClickMoveToMarketWrite={onClickMoveToMarketWrite}
    />
  );
}
