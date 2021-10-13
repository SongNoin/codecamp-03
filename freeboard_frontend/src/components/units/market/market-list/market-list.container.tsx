import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarKetListUI from "./market-list.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./market-list.queries";

export default function MarKetList() {
  const router = useRouter();
  const { data: dataUseditemsOfTheBest } = useQuery(
    FETCH_USEDITEMS_OF_THE_BEST
  );
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1 },
  });

  // function onClickMoveToProduct(event) {
  //   router.push(`/market/market-detail/${event.currentTarget.id}`);
  // }

  const onClickMoveToProduct = (el) => (event) => {
    router.push(`/market/market-detail/${event.currentTarget.id}`);

    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      return;
    }

    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);

    if (baskets.length > 3) {
      baskets.shift();
    }

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  function onClickMoveToMarketWrite() {
    router.push("/market/market-write");
  }
  return (
    <MarKetListUI
      data={data}
      dataUseditemsOfTheBest={dataUseditemsOfTheBest}
      onClickMoveToProduct={onClickMoveToProduct}
      onClickMoveToMarketWrite={onClickMoveToMarketWrite}
    />
  );
}