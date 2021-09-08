import ProductUI from "./product.presenter";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./product.queries";
import router from "next/router";

export default function Product(props) {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [mySeller, setMySeller] = useState("");
  const [myName, setMyName] = useState("");
  const [myDetail, setMyDetail] = useState("");
  const [myPrice, setMyPrice] = useState("");

  function onChangeMySeller(event) {
    setMySeller(event.target.value);
  }

  function onChangeMyName(event) {
    setMyName(event.target.value);
  }

  function onChangeMyDetail(event) {
    setMyDetail(event.target.value);
  }

  function onChangeMyPrice(event) {
    setMyPrice(event.target.value);
  }

  async function onClickSubmit() {
    const result = await createProduct({
      variables: {
        seller: mySeller,
        createProductInput: {
          name: myName,
          detail: myDetail,
          price: Number(myPrice),
        },
      },
    });
    console.log(result);
    console.log(result.data.createProduct._id);
    router.push(
      `/quiz/sidequiz/08-02-product-detail/${result.data.createProduct._id}/`
    );
  }

  async function onClickUpdate() {
    try {
      await updateProduct({
        variables: {
          productId: router.query.id,
          updateProductInput: {
            name: myName,
            detail: myDetail,
            price: Number(myPrice),
          },
        },
      });
      router.push(`/quiz/sidequiz/08-02-product-detail/${router.query.id}/`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductUI
      onChangeMySeller={onChangeMySeller}
      onChangeMyName={onChangeMyName}
      onChangeMyDetail={onChangeMyDetail}
      onChangeMyPrice={onChangeMyPrice}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isUpdate={props.isUpdate}
    />
  );
}
