import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProductPag() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [mySeller, setMySeller] = useState("");
  const [myName, setMyName] = useState("");
  const [myDetail, setMyDetail] = useState("");
  const [myPrice, setMyprice] = useState("");

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
    setMyprice(event.target.value);
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
    console.log(result.data.createProduct._id);
  }

  return (
    <>
      판매자: <input type="text" onChange={onChangeMySeller} />
      상품명: <input type="text" onChange={onChangeMyName} />
      상품상세: <input type="text" onChange={onChangeMyDetail} />
      상품가격: <input type="text" onChange={onChangeMyPrice} />
      <button onClick={onClickSubmit}>상품 등록하기!!</button>
    </>
  );
}
