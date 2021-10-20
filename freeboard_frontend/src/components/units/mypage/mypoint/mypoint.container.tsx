import MyPointUI from "./mypoint.presenter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS } from "./mypoint.queries";

export default function MyPoint() {
  const [total, setTotal] = useState(true);
  const [charge, setCharge] = useState(false);
  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);

  function onClickMoveToTotal() {
    setTotal(true);
    setCharge(false);
    setBuy(false);
    setSell(false);
  }
  function onClickMoveToCharge() {
    setTotal(false);
    setCharge(true);
    setBuy(false);
    setSell(false);
  }
  function onClickMoveToBuy() {
    setTotal(false);
    setCharge(false);
    setBuy(true);
    setSell(false);
  }
  function onClickMoveToSell() {
    setTotal(false);
    setCharge(false);
    setBuy(false);
    setSell(true);
  }
  return (
    <MyPointUI
      total={total}
      charge={charge}
      buy={buy}
      sell={sell}
      onClickMoveToTotal={onClickMoveToTotal}
      onClickMoveToCharge={onClickMoveToCharge}
      onClickMoveToBuy={onClickMoveToBuy}
      onClickMoveToSell={onClickMoveToSell}
    />
  );
}
