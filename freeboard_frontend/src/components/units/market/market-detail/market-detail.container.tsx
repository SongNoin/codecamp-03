import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

import MarketDetailUI from "./market-detail.presenter";
import {
  FETCH_USEDITEM,
  DELETE_USEDITEM,
  TOGGLE_USEDITEM_PICK,
  CREATEPOINTTRANSACTIONOFBUYINGANDSELLING,
} from "./market-detail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function MarketDetail() {
  const router = useRouter();

  const [deleteUseditem] = useMutation(DELETE_USEDITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATEPOINTTRANSACTIONOFBUYINGANDSELLING
  );
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

  async function onClickBuy() {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.number,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useritemId: router.query.number },
          },
        ],
      });
      alert("상품을 구매합니다~");
      router.push(`/market/market-list`);
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f2400c45d63389ba72ae0f127645b6ec&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            Number(data?.fetchUseditem.useditemAddress?.lat) || 37.485148,
            Number(data?.fetchUseditem.useditemAddress?.lng) || 126.895113
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click"
          // function (mouseEvent: { latLng: any }) {
          //   // 클릭한 위도, 경도 정보를 가져옵니다

          //   const latlng = mouseEvent.latLng;

          //   // 마커 위치를 클릭한 위치로 옮깁니다
          //   marker.setPosition(latlng);

          //   // const message =
          //   //   "클릭한 위치의 위도는 " +
          //   //   latlng.getLat() +
          //   //   " 이고, " +
          //   //   "경도는 " +
          //   //   latlng.getLng() +
          //   //   " 입니다";
          //   // alert(message);
          // }
        );
      });
    };
  }); // ,[] 을 뺴줬더니 해결 완료.. (이해가 필요하다)

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteProduct={onClickDeleteProduct}
      onClickToggleUseditemPick={onClickToggleUseditemPick}
      onClickBuy={onClickBuy}
    />
  );
}
