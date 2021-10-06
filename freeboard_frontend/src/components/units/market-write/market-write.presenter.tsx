import {
  Wrapper,
  WrapperHeader,
  TitleWrapper,
  Title,
  WrapperBody,
  InputWrapper,
  InputName,
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
  UploadButton,
} from "./market-write.styles";

export default function MarketWriteUI() {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <TitleWrapper>
            <Title>상품 등록하기</Title>
          </TitleWrapper>
        </WrapperHeader>
        <WrapperBody>
          <InputWrapper>
            <InputName>상품명</InputName>
            <InputText type="text" />
          </InputWrapper>
          <InputWrapper>
            <InputName>한줄요약</InputName>
            <InputText type="text" />
          </InputWrapper>
          <DetailWrapper>
            <InputName>상품설명</InputName>
            <DetailText />
          </DetailWrapper>
          <InputWrapper>
            <InputName>판매가격</InputName>
            <InputText type="text" />
          </InputWrapper>
          <InputWrapper>
            <InputName>태그입력</InputName>
            <InputText type="text" />
          </InputWrapper>
          <MapWrapper>
            <LocationWrapper>
              <InputName>거래위치</InputName>
              <Location></Location>
            </LocationWrapper>
            <AddressWrapper>
              <GPSWrapper>
                <InputName>GPS</InputName>
                <GPSTextWrapper>
                  <GPSText type="text" />
                  <GPSText type="text" />
                </GPSTextWrapper>
              </GPSWrapper>
              <Address>
                <InputName>주소</InputName>
                <AddressText type="text" />
                <AddressText type="text" />
              </Address>
            </AddressWrapper>
          </MapWrapper>
          <PhotoWrapper>
            <InputName>사진 첨부</InputName>
            <ProductPhotoWrapper>
              <ProductPhoto></ProductPhoto>
              <ProductPhoto></ProductPhoto>
            </ProductPhotoWrapper>
          </PhotoWrapper>
          <OptionWrapper>
            <InputName>메인 사진 설정</InputName>
            <Option name="optionradio" type="radio" />
            <RadioName>사진 1</RadioName>
            <Option name="optionradio" type="radio" />
            <RadioName>사진 2</RadioName>
          </OptionWrapper>
        </WrapperBody>
        <WrapperFooter>
          <ButtonWrapper>
            <UploadButton>등록하기</UploadButton>
          </ButtonWrapper>
        </WrapperFooter>
      </Wrapper>
    </>
  );
}
