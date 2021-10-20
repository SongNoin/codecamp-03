import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyMarketUI from "./mymarket.presenter";
import {
  FETCH_USEDITEM_IPICKED,
  FETCH_USEDITEM_ISOLD,
} from "./mymarket.queries";

export default function MyMarket() {
  const [isPickList, setIsPickList] = useState(false);
  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });

  const { data: pickData } = useQuery(FETCH_USEDITEM_IPICKED, {
    variables: { search: "" },
  });

  function onClickMyPickList() {
    setIsPickList(true);
    console.log(isPickList);
  }

  function onClickMyProductList() {
    setIsPickList(false);
  }
  return (
    <MyMarketUI
      data={data}
      pickData={pickData}
      isPickList={isPickList}
      onClickMyProductList={onClickMyProductList}
      onClickMyPickList={onClickMyPickList}
    />
  );
}
