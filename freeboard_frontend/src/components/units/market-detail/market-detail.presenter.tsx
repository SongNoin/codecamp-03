import CommonButton from "../../commons/buttons/01/CommonButton";
import RedButton from "../../commons/buttons/02/RedButton";
import {
  Wrapper,
  WrapperHeader,
  UserWrapper,
  IconWrapper,
  UserInfo,
  UserPhoto,
  InfoWrapper,
  Seller,
  Date,
  LinkIcon,
  MapIcon,
  WrapperBody,
  TitleWrapper,
  Title,
  SubTitle,
  MainTitle,
  LikeWrapper,
  Heart,
  LikeCount,
  PriceWrapper,
  PhotoWrapper,
  ProductPhoto,
  Contents,
  ContentsWrapper,
  TagWrapper,
  Tag,
  Line,
  MapWrapper,
  Map,
  ButtonWrapper,
} from "./market-detail.styles";
export default function MarketDetailUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <UserWrapper>
            <UserInfo>
              <UserPhoto src="/images/photo.png" />
              <InfoWrapper>
                <Seller>판매자</Seller>
                <Date>Date :</Date>
              </InfoWrapper>
            </UserInfo>
          </UserWrapper>
          <IconWrapper>
            <LinkIcon src="/images/link.png" />
            <MapIcon src="/images/map2.png" />
          </IconWrapper>
        </WrapperHeader>
        <Line />
        <WrapperBody>
          <TitleWrapper>
            <Title>
              <SubTitle>2019 LTE 32GB</SubTitle>
              <MainTitle>삼성전자 갤럭시탭A 10.1</MainTitle>
            </Title>
            <LikeWrapper>
              <Heart src="/images/heart.png" />
              <LikeCount>20</LikeCount>
            </LikeWrapper>
          </TitleWrapper>
          <PriceWrapper>240,120원</PriceWrapper>
          <PhotoWrapper>
            <ProductPhoto>물품사진</ProductPhoto>
          </PhotoWrapper>
          <ContentsWrapper>
            <Contents>내용</Contents>
          </ContentsWrapper>
          <TagWrapper>
            <Tag># 태그</Tag>
          </TagWrapper>
          <Line />
          <MapWrapper>
            <Map>맵</Map>
          </MapWrapper>
        </WrapperBody>
      </Wrapper>
      <ButtonWrapper>
        <CommonButton onClick={props.onClickMoveToMarketList} name="목록으로" />
        <RedButton name="삭제하기" />
        <CommonButton name="수정하기" />
      </ButtonWrapper>
    </>
  );
}
