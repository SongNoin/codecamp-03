import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_PRODUCT = gql`
  query {
    fetchProducts {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Coulumn = styled.div`
  width: 20%;
`;

export default function MapProductSelectorPage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCT);

  async function onClickDelete(event) {
    await deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCT }],
    });
  }

  return (
    <div>
      {data?.fetchProducts.map((el, index) => (
        <Row key={el._id}>
          <Coulumn>
            <input type="checkbox" />
          </Coulumn>
          <Coulumn>{index}</Coulumn>
          <Coulumn>{el.seller}</Coulumn>
          <Coulumn>{el.name}</Coulumn>
          <Coulumn>{el.detail}</Coulumn>
          <Coulumn>{el.price}</Coulumn>
          <Coulumn>{el.createdAt}</Coulumn>
          <Coulumn>
            <button id={el._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Coulumn>
        </Row>
      ))}
    </div>
  );
}
