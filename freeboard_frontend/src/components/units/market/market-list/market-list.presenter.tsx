import RecentWatchBox from "../../../commons/boxes/01/recentwatchbox";
import CommonButton from "../../../commons/buttons/01/CommonButton";
import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";

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
  ProductListWrapper,
  ProductListSoldWrapper,
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
  Infinite,
} from "./market-list.styles";

export default function MarKetListUI(props) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>베스트 상품</Title>
        </TitleWrapper>
        <BestProductWrapper>
          {props.dataUseditemsOfTheBest?.fetchUseditemsOfTheBest.map((el) => (
            <BestProductBox
              key={el._id}
              onClick={props.onClickMoveToProduct(el)}
              id={el._id}
            >
              <BestProductPhoto
                src={
                  el?.images[0]
                    ? `https://storage.googleapis.com/${el?.images[0]}`
                    : "/images/noimage.jpg"
                }
              />
              <BoxBody>
                <BestProductName>{el.name}</BestProductName>
                <BoxFooter>
                  <BestProductInfo>
                    <BestProductSubTitle>{el.remarks}</BestProductSubTitle>
                    <BestProductPrice>
                      {el.price.toLocaleString("ko-KR")} 원
                    </BestProductPrice>
                  </BestProductInfo>
                  <BestProductLikeWrapper>
                    <ProductHeart src="/images/heart.png" />
                    <BestProductLikeCount>
                      {el.pickedCount}
                    </BestProductLikeCount>
                  </BestProductLikeWrapper>
                </BoxFooter>
              </BoxBody>
            </BestProductBox>
          ))}
        </BestProductWrapper>
        <ProductSearchWrapper>
          <MenuWrapper>
            <SellProduct
              onClick={props.onClickNotSoldOutList}
              soldOut={props.soldOut}
            >
              판매중 상품
            </SellProduct>
            <SoldOutProduct
              onClick={props.onClickSoldOutList}
              soldOut={props.soldOut}
            >
              판매된 상품
            </SoldOutProduct>
          </MenuWrapper>
          <SearchWrapper>
            <SearchBox
              type="text"
              placeholder="제품을 검색해주세요"
              onChange={props.onChangeSearch}
            />
            {/* <SearchDate type="text" placeholder="2020.12.02~2020.12.02" /> */}
            {/* <SearchButton onClick={props.onClickSearch}>검색</SearchButton> */}
            <SmallCommonButton onClick={props.onClickSearch} name="검색" />
          </SearchWrapper>
        </ProductSearchWrapper>

        {!props.soldOut && (
          <ProductListWrapper>
            <div>
              <Infinite
                pageStart={0}
                loadMore={props.onLoadMore}
                hasMore={true || false}
                useWindow={false}
              >
                {props.data?.fetchUseditems.map((el) => (
                  <ProductRow
                    key={el._id}
                    id={el._id}
                    onClick={props.onClickMoveToProduct(el)}
                  >
                    <Line />
                    <ProductWrapperBody>
                      <ProductInfoWrapper>
                        {el?.images[0] ? (
                          <ProductPhoto
                            src={`https://storage.googleapis.com/${el?.images[0]}`}
                          />
                        ) : (
                          <ProductPhoto src={"/images/noimage.jpg"} />
                        )}
                        <ProductInfo>
                          <ProductTitle>{el.name}</ProductTitle>
                          <ProductSubTitle>{el.remarks}</ProductSubTitle>
                          <ProductTag>{el.tags}</ProductTag>
                          <ProductInfoFooter>
                            <ProductSellerWrapper>
                              <ProductSellerPhoto
                                src={
                                  el?.seller.picture
                                    ? `https://storage.googleapis.com/${el?.seller.picture}`
                                    : `/images/photo.png`
                                }
                              />

                              <ProductSeller>{el.seller?.name}</ProductSeller>
                            </ProductSellerWrapper>
                            <ProductLikeWrapper>
                              <ProductHeart src="/images/heart.png" />
                              <ProductLikeCount>
                                {el.pickedCount}
                              </ProductLikeCount>
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
              </Infinite>
            </div>
          </ProductListWrapper>
        )}

        <ProductListSoldWrapper>
          {props.soldOut && (
            <div>
              {props.soldOutData?.fetchUseditems.map((el) => (
                <ProductRow
                  key={el._id}
                  id={el._id}
                  onClick={props.onClickMoveToProduct(el)}
                >
                  <Line />
                  <ProductWrapperBody>
                    <ProductInfoWrapper>
                      {el?.images[0] ? (
                        <ProductPhoto
                          src={`https://storage.googleapis.com/${el?.images[0]}`}
                        />
                      ) : (
                        <ProductPhoto src={"/images/noimage.jpg"} />
                      )}
                      <ProductInfo>
                        <ProductTitle>{el.name}</ProductTitle>
                        <ProductSubTitle>{el.remarks}</ProductSubTitle>
                        <ProductTag>{el.tags}</ProductTag>
                        <ProductInfoFooter>
                          <ProductSellerWrapper>
                            <ProductSellerPhoto src="/images/photo.png" />
                            <ProductSeller>{el.seller?.name}</ProductSeller>
                          </ProductSellerWrapper>
                          <ProductLikeWrapper>
                            <ProductHeart src="/images/heart.png" />
                            <ProductLikeCount>
                              {el.pickedCount}
                            </ProductLikeCount>
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
            </div>
          )}
        </ProductListSoldWrapper>

        <ButtonWrapper>
          <div />
          <CommonButton
            onClick={props.onClickMoveToMarketWrite}
            name="상품 등록하기"
          />
        </ButtonWrapper>
      </Wrapper>
      <RecentWatchBox />
    </>
  );
}
