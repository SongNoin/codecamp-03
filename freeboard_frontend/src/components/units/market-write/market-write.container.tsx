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

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

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
  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickUploadProduct={onClickUploadProduct}
      onClickUpdateProduct={onClickUpdateProduct}
      isEdit={props.isEdit}
    />
  );
}
