import CommonButton from "../../commons/buttons/01/CommonButton";
import {
  Wrapper,
  WrapperHeader,
  UserWrapper,
  UserInfo,
  UserPhoto,
  InfoWrapper,
  Seller,
  Date,
  LinkIcon,
  MapIcon,
  WrapperBody,
  TitleWrapper,
  PriceWrapper,
  PhotoWrapper,
  ContentsWrapper,
  TagWrapper,
  Line,
  MapWrapper,
  WrapperFooter,
} from "./market-detail.styles";
export default function MarketDetailUI() {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <UserWrapper>
            <UserInfo>
              <UserPhoto></UserPhoto>
              <InfoWrapper>
                <Seller>판매자</Seller>
                <Date>Date:</Date>
              </InfoWrapper>
            </UserInfo>
          </UserWrapper>
          <InfoWrapper>
            <LinkIcon>링크</LinkIcon>
            <MapIcon>맵아이콘</MapIcon>
          </InfoWrapper>
        </WrapperHeader>
        <WrapperBody>
          <TitleWrapper></TitleWrapper>
          <PriceWrapper>가격</PriceWrapper>
          <PhotoWrapper>사진</PhotoWrapper>
          <ContentsWrapper>내용</ContentsWrapper>
          <TagWrapper>태그</TagWrapper>
          <Line />
          <MapWrapper>맵</MapWrapper>
          <Line />
        </WrapperBody>
        <WrapperFooter>
          <CommonButton name="목록으로" />
          <CommonButton name="수정하기" />
        </WrapperFooter>
      </Wrapper>
    </>
  );
}
