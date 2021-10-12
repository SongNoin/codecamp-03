import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./market-detail.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./market-detail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.number,
    },
  });

  async function onClickToggleUseditemPick() {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query.number,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.number },
        },
      ],
    });
  }

  function onClickMoveToMarketList() {
    router.push("/market/market-list");
  }

  function onClickMoveToEdit() {
    router.push(`/market/market-detail/${router.query.number}/edit`);
  }

  async function onClickDeleteProduct() {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.number,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.number },
          },
        ],
      });
      alert("상품을 삭제합니다~");
      router.push(`/market/market-list`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickToggleUseditemPick={onClickToggleUseditemPick}
    />
  );
}
