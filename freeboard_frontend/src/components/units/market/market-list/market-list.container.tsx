import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarKetListUI from "./market-list.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./market-list.queries";

export default function MarKetList() {
  const router = useRouter();
  const [soldOut, setSoldOut] = useState(false);
  const { data: dataUseditemsOfTheBest } = useQuery(
    FETCH_USEDITEMS_OF_THE_BEST
  );
  const { data } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: false },
  });

  const { data: soldOutData } = useQuery(FETCH_USEDITEMS, {
    variables: { page: 1, isSoldout: true },
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

  function onClickSoldOutList() {
    setSoldOut(true);
  }
  function onClickNotSoldOutList() {
    setSoldOut(false);
  }
  return (
    <MarKetListUI
      data={data}
      dataUseditemsOfTheBest={dataUseditemsOfTheBest}
      onClickMoveToProduct={onClickMoveToProduct}
      onClickMoveToMarketWrite={onClickMoveToMarketWrite}
      soldOutData={soldOutData}
      soldOut={soldOut}
      onClickSoldOutList={onClickSoldOutList}
      onClickNotSoldOutList={onClickNotSoldOutList}
    />
  );
}
