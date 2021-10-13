import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MarketWriteUI from "./market-write.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./market-write.queries";
import { schema } from "./market-write.validation";

export default function MarketWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);

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

  async function onClickUploadProduct(data) {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data },
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
          updateUseditemInput: { ...data },
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
            color: [
              "#000000",
              "#e60000",
              "#ff9900",
              "#ffff00",
              "#008a00",
              "#0066cc",
              "#9933ff",
              "#ffffff",
              "#facccc",
              "#ffebcc",
              "#ffffcc",
              "#cce8cc",
              "#cce0f5",
              "#ebd6ff",
              "#bbbbbb",
              "#f06666",
              "#ffc266",
              "#ffff66",
              "#66b966",
              "#66a3e0",
              "#c285ff",
              "#888888",
              "#a10000",
              "#b26b00",
              "#b2b200",
              "#006100",
              "#0047b2",
              "#6b24b2",
              "#444444",
              "#5c0000",
              "#663d00",
              "#666600",
              "#003700",
              "#002966",
              "#3d1466",
              "custom-color",
            ],
          },
          { background: [] },
        ],
        ["image", "video"],
        ["clean"],
      ],
    },
  };
  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickUploadProduct={onClickUploadProduct}
      onClickUpdateProduct={onClickUpdateProduct}
      onChangeMyContents={onChangeMyContents}
      isEdit={props.isEdit}
      modules={modules}
    />
  );
}
