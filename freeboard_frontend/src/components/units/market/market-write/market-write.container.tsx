import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MarketWriteUI from "./market-write.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./market-write.queries";
import { schema } from "./market-write.validation";
import { UPLOAD_FILE } from "../../../commons/uploads/02/Uploads02.queries";
import { FETCH_USEDITEM } from "../market-detail/market-detail.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.number,
    },
  });
  const [myLat, setMyLat] = useState(null);
  const [myLng, setMyLng] = useState(null);
  const [myAddress, setMyAddress] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");

  const [files, setFiles] = useState([null, null, null]);

  const { handleSubmit, register, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onChangeMyContents(value) {
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  }

  function onChangeAddressDetail(event) {
    setMyAddressDetail(event.target.value);
  }

  function onClickMoveToMarketList() {
    router.push("/market/market-list");
  }

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  // function onChangeAddress(event) {
  //   setMyAddress(event.target.value);
  // }
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
              address: myAddress,
              addressDetail: myAddressDetail,
              lat: myLat,
              lng: myLng,
            },
            images: myImages,
          },
        },
      });
      console.log(data);
      alert("????????? ???????????????~");
      router.push(`/market/market-detail/${result.data.createUseditem._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onClickUpdateProduct(data) {
    try {
      const uploadFiles = files.map((el) =>
        el ? uploadFile({ variables: { file: el } }) : null
      );
      const results = await Promise.all(uploadFiles);
      const myImages = results.map((el) => el?.data.uploadFile.url || "");

      console.log("3333", myImages);
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            useditemAddress: {
              lat: myLat,
              lng: myLng,
            },
            images: myImages,
          },
          useditemId: router.query.number,
        },
      });
      console.log(data);
      alert("????????? ???????????????~");
      router.push(`/market/market-detail/${result.data.updateUseditem._id}`);
    } catch (error) {
      
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (props.isEdit && data?.fetchUseditem) {
      setValue("name", data?.fetchUseditem.name);
      setValue("remarks", data?.fetchUseditem.remarks);
      setValue("contents", data?.fetchUseditem.contents);
      setValue("price", data?.fetchUseditem.price);
      setValue("tags", data?.fetchUseditem.tags);
    }
  }, [props.isEdit, data?.fetchUseditem]);

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
        const container = document.getElementById("map"); // ????????? ?????? ????????? DOM ????????????
        const options = {
          // ????????? ????????? ??? ????????? ?????? ??????
          center: new window.kakao.maps.LatLng(37.485148, 126.895113), // ????????? ????????????.
          level: 3, // ????????? ??????(??????, ?????? ??????)
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // ?????? ??????????????? ????????? ???????????????
          position: map.getCenter(),
        });
        const geocoder = new window.kakao.maps.services.Geocoder();
        console.log(geocoder);
        // const coord = new window.kakao.maps.LatLng(myLat, myLng);
        const test = function (coords, callback) {
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        };
        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // ????????? ??????, ?????? ????????? ???????????????
            test(mouseEvent.latLng, function (result, status) {
              if (status === window.kakao.maps.services.Status.OK) {
                setMyAddress(result[0].address.address_name);
              }
            });

            const latlng = mouseEvent.latLng;

            // ?????? ????????? ????????? ????????? ????????????
            marker.setPosition(latlng);

            // const message =
            //   "????????? ????????? ????????? " +
            //   latlng.getLat() +
            //   " ??????, " +
            //   "????????? " +
            //   latlng.getLng() +
            //   " ?????????";
            // alert(message);
            setMyLat(latlng.getLat());
            setMyLng(latlng.getLng());
            setMyAddress(geocoder.coord2Address);
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
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFiles={onChangeFiles}
      isEdit={props.isEdit}
      modules={modules}
      myLat={myLat}
      myLng={myLng}
      data={data}
      myAddress={myAddress}
    />
  );
}
