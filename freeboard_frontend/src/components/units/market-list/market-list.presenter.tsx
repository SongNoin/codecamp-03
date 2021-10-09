import CommonButton from "../../commons/buttons/01/CommonButton";
import {
  Line,
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
  ProductRow,
  ProductWrapperBody,
  ProductInfoWrapper,
  ProductPhoto,
  ProductInfo,
  ProductTitle,
  ProductSubTitle,
  ProductTag,
  ProductInfoFooter,
  ProductSellerPhoto,
  ProductSellerWrapper,
  ProductSeller,
  ProductHeart,
  ProductLikeWrapper,
  ProductLikeCount,
  ProductPriceWrapper,
  Money,
  ProductPrice,
  ButtonWrapper,
} from "./market-list.styles";

export default function MarKetListUI(props) {
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
                  <ProductHeart src="/images/heart.png" />
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
        <ProductListWrapper>
          {props.data?.fetchUseditems.map((el) => (
            <ProductRow
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveToProduct}
            >
              <Line />
              <ProductWrapperBody>
                <ProductInfoWrapper>
                  <ProductPhoto></ProductPhoto>
                  <ProductInfo>
                    <ProductTitle>{el.name}</ProductTitle>
                    <ProductSubTitle>{el.remarks}</ProductSubTitle>
                    <ProductTag>{el.tags}</ProductTag>
                    <ProductInfoFooter>
                      <ProductSellerWrapper>
                        <ProductSellerPhoto src="/images/photo.png" />
                        <ProductSeller>판매자</ProductSeller>
                      </ProductSellerWrapper>
                      <ProductLikeWrapper>
                        <ProductHeart src="/images/heart.png" />
                        <ProductLikeCount>20</ProductLikeCount>
                      </ProductLikeWrapper>
                    </ProductInfoFooter>
                  </ProductInfo>
                </ProductInfoWrapper>
                <ProductPriceWrapper>
                  <Money src="/images/money.png" />
                  <ProductPrice>{el.price}</ProductPrice>
                </ProductPriceWrapper>
              </ProductWrapperBody>
            </ProductRow>
          ))}
        </ProductListWrapper>
        <ButtonWrapper>
          <div />
          <CommonButton
            onClick={props.onClickMoveToMarketWrite}
            name="상품 등록하기"
          />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
