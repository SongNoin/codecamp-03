import {
  Wrapper,
  TitleWrapper,
  Title,
  BestProductWrapper,
  BestProductBox,
  BestProductPhoto,
  BoxBody,
  BestProductName,
  BoxFooter,
  BestProductInfo,
  BestProductSubTitle,
  BestProductPrice,
  BestProductLikeWrapper,
  BestProductHeart,
  BestProductLikeCount,
  ProductSearchWrapper,
  MenuWrapper,
  SellProduct,
  SoldOutProduct,
  SearchWrapper,
  SearchBox,
  SearchDate,
  SearchButton,
  ProductListWrapper,
  ButtonWrapper,
} from "./market-list.styles";

export default function MarKetListUI() {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>베스트 상품</Title>
        </TitleWrapper>
        <BestProductWrapper>
          <BestProductBox>
            <BestProductPhoto></BestProductPhoto>
            <BoxBody>
              <BestProductName>삼성전자 갤럭시탭A 10.1</BestProductName>
              <BoxFooter>
                <BestProductInfo>
                  <BestProductSubTitle>2019 LTE 32GB</BestProductSubTitle>
                  <BestProductPrice>240,120원</BestProductPrice>
                </BestProductInfo>
                <BestProductLikeWrapper>
                  <BestProductHeart src="/images/heart.png" />
                  <BestProductLikeCount>20</BestProductLikeCount>
                </BestProductLikeWrapper>
              </BoxFooter>
            </BoxBody>
          </BestProductBox>
        </BestProductWrapper>
        <ProductSearchWrapper>
          <MenuWrapper>
            <SellProduct>판매중 상품</SellProduct>
            <SoldOutProduct>판매된 상품</SoldOutProduct>
          </MenuWrapper>
          <SearchWrapper>
            <SearchBox type="text" placeholder="제품을 검색해주세요" />
            <SearchDate type="text" placeholder="2020.12.02~2020.12.02" />
            <SearchButton>검색</SearchButton>
          </SearchWrapper>
        </ProductSearchWrapper>
        <ProductListWrapper></ProductListWrapper>
        <ButtonWrapper></ButtonWrapper>
      </Wrapper>
    </>
  );
}
