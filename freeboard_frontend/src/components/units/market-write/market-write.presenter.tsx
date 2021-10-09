import CommonButton from "../../commons/buttons/01/CommonButton";
import RedButton from "../../commons/buttons/02/RedButton";
import CommonLabel from "../../commons/texts/01/CommonLabel";
import {
  Wrapper,
  WrapperHeader,
  TitleWrapper,
  Title,
  WrapperBody,
  InputWrapper,
  InputText,
  DetailWrapper,
  DetailText,
  MapWrapper,
  LocationWrapper,
  Location,
  AddressWrapper,
  GPSWrapper,
  GPSTextWrapper,
  GPSText,
  Address,
  AddressText,
  PhotoWrapper,
  ProductPhotoWrapper,
  ProductPhoto,
  OptionWrapper,
  Option,
  RadioName,
  WrapperFooter,
  ButtonWrapper,
} from "./market-write.styles";

export default function MarketWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickUploadProduct)}>
      <Wrapper>
        <WrapperHeader>
          <TitleWrapper>
            <Title>상품 등록하기</Title>
          </TitleWrapper>
        </WrapperHeader>
        <WrapperBody>
          <InputWrapper>
            <CommonLabel name="상품명" />
            <InputText type="text" {...props.register("name")} />
          </InputWrapper>
          <InputWrapper>
            <CommonLabel name="한줄요약" />
            <InputText type="text" {...props.register("remarks")} />
          </InputWrapper>
          <DetailWrapper>
            <CommonLabel name="상품설명" />
            <DetailText {...props.register("contents")} />
          </DetailWrapper>
          <InputWrapper>
            <CommonLabel name="판매가격" />
            <InputText type="text" {...props.register("price")} />
          </InputWrapper>
          <InputWrapper>
            <CommonLabel name="태그입력" />
            <InputText type="text" />
          </InputWrapper>
          <MapWrapper>
            <LocationWrapper>
              <CommonLabel name="거래위치" />

              <Location></Location>
            </LocationWrapper>
            <AddressWrapper>
              <GPSWrapper>
                <CommonLabel name="GPS" />

                <GPSTextWrapper>
                  <GPSText type="text" />
                  <GPSText type="text" />
                </GPSTextWrapper>
              </GPSWrapper>
              <Address>
                <CommonLabel name="주소" />

                <AddressText type="text" />
                <AddressText type="text" />
              </Address>
            </AddressWrapper>
          </MapWrapper>
          <PhotoWrapper>
            <CommonLabel name="사진 첨부" />

            <ProductPhotoWrapper>
              <ProductPhoto></ProductPhoto>
              <ProductPhoto></ProductPhoto>
            </ProductPhotoWrapper>
          </PhotoWrapper>
          <OptionWrapper>
            <CommonLabel name="메인사진설정" />
            <Option name="optionradio" type="radio" />
            <RadioName>사진 1</RadioName>
            <Option name="optionradio" type="radio" />
            <RadioName>사진 2</RadioName>
          </OptionWrapper>
        </WrapperBody>
        <WrapperFooter>
          <ButtonWrapper>
            {/* <RedButton
              onClick={props.onClickMoveToMarketList}
              name="취소하기"
            /> */}
            <CommonButton type="submit" name="등록하기" />
          </ButtonWrapper>
        </WrapperFooter>
      </Wrapper>
    </form>
  );
}
