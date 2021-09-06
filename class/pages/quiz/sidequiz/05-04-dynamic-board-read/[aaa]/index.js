import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

export default function DynamicRouted() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.aaa, ///aaa는 변수 폴더
    },
  });

  return (
    <>
      <div>판매자 :{data?.fetchProduct.seller}</div>
      <div>상품평 :{data?.fetchProduct.name}</div>
      <div>상품상세 :{data?.fetchProduct.detail}</div>
      <div>상품가격 :{data?.fetchProduct.price}</div>
    </>
  );
}
