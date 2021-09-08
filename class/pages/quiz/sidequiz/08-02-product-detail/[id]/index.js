import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.id },
  });

  function ocClickMoveToEdit() {
    router.push(`/quiz/sidequiz/08-02-product-detail/${router.query.id}/edit`);
  }

  return (
    <>
      <div>판매자:{data?.fetchProduct.seller}</div>
      <div>상품명: {data?.fetchProduct.name}</div>
      <div>상품설명: {data?.fetchProduct.detail}</div>
      <div>상품가격: {data?.fetchProduct.price}</div>
      <button onClick={ocClickMoveToEdit}>수정하러 이동하기</button>
    </>
  );
}
