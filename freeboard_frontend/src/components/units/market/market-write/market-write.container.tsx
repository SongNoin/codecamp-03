import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MarketWriteUI from "./market-write.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./market-write.queries";
import { schema } from "./market-write.validation";
import { UPLOAD_FILE } from "../../../commons/uploads/02/Uploads02.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myLat, setMyLat] = useState(null);
  const [myLng, setMyLng] = useState(null);
  const [files, setFiles] = useState([null, null, null]);

  const { handleSubmit, register, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onChangeMyContents(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  }

  function onClickMoveToMarketList() {
    router.push("/market/market-list");
  }

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  async function onClickUploadProduct(data) {
    try {
      const uploadFiles = files
        .filter((el) => el)
        .map((el) => uploadFile({ variables: { file: el } }));
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el.data.uploadFile.url);

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            useditemAddress: {
              lat: myLat,
              lng: myLng,
            },
            images: myImages,
          },
        },
      });
      console.log(data);
      alert("상품을 등록합니다~");
      router.push(`/market/market-detail/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onClickUpdateProduct(data) {
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            useditemAddress: {
              lat: myLat,
              lng: myLng,
            },
          },
          useditemId: router.query.number,
        },
      });
      console.log(data);
      alert("상품을 수정합니다~");
      router.push(`/market/market-detail/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [
          {
            color: ["#000000", "#e60000", "#ff9900", "custom-color"],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };

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
          center: new window.kakao.maps.LatLng(37.485148, 126.895113), // 지도의 중심좌표.
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
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다

            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            // const message =
            //   "클릭한 위치의 위도는 " +
            //   latlng.getLat() +
            //   " 이고, " +
            //   "경도는 " +
            //   latlng.getLng() +
            //   " 입니다";
            // alert(message);
            setMyLat(latlng.getLat());
            setMyLng(latlng.getLng());
          }
        );
      });
    };
  }, []);
  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickUploadProduct={onClickUploadProduct}
      onClickUpdateProduct={onClickUpdateProduct}
      onChangeMyContents={onChangeMyContents}
      onChangeFiles={onChangeFiles}
      isEdit={props.isEdit}
      modules={modules}
      myLat={myLat}
      myLng={myLng}
    />
  );
}
