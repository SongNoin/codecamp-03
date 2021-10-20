import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";
import {
  Wrapper,
  WrapperHeader,
  ProductMenu,
  PickMenu,
  RowName,
  ColumnName,
  Row,
  Column,
  ColumnTitle,
  ColumnSoldOut,
  PickColumnTitle,
  MenuWrapper,
  SearchWrapper,
  SearchInput,
  WrapperBody,
} from "./mymarket.styles";

export default function MyMarketUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <MenuWrapper>
            <ProductMenu
              onClick={props.onClickMyProductList}
              isPickList={props.isPickList}
            >
              나의 상품
            </ProductMenu>
            <PickMenu
              onClick={props.onClickMyPickList}
              isPickList={props.isPickList}
            >
              마이찜
            </PickMenu>
          </MenuWrapper>
          <SearchWrapper>
            <SearchInput />
            <SmallCommonButton type="text" name="검색" />
          </SearchWrapper>
        </WrapperHeader>
        {!props.isPickList ? (
          <WrapperBody>
            <RowName>
              <ColumnName>번호</ColumnName>
              <ColumnTitle>상품명</ColumnTitle>
              <ColumnSoldOut></ColumnSoldOut>
              <ColumnName>판매가격</ColumnName>
              <ColumnName>날짜</ColumnName>
            </RowName>
            {props.data?.fetchUseditemsISold.map((el, index) => (
              <Row key={el._id}>
                <Column>{10 - index}</Column>
                <ColumnTitle>{el.name}</ColumnTitle>
                <ColumnSoldOut>{el?.buyer?.name && "판매완료"}</ColumnSoldOut>
                <Column>{el.price}</Column>
                <Column>{el.createdAt.slice(0, 10)}</Column>
              </Row>
            ))}
          </WrapperBody>
        ) : (
          <WrapperBody>
            <RowName>
              <ColumnName>번호</ColumnName>
              <PickColumnTitle>상품명</PickColumnTitle>
              <ColumnSoldOut></ColumnSoldOut>
              <ColumnName>판매가격</ColumnName>
              <ColumnName>판매자</ColumnName>
              <ColumnName>날짜</ColumnName>
            </RowName>
            {props.pickData?.fetchUseditemsIPicked.map((el, index) => (
              <Row key={el._id}>
                <Column>{10 - index}</Column>
                <PickColumnTitle>{el.name}</PickColumnTitle>
                <ColumnSoldOut>{el?.buyer?.name && "판매완료"}</ColumnSoldOut>
                <Column>￦ {el.price}</Column>
                <Column>{el.seller.name}</Column>
                <Column>{el.createdAt.slice(0, 10)}</Column>
              </Row>
            ))}
          </WrapperBody>
        )}
      </Wrapper>
    </>
  );
}
