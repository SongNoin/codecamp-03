import CommonButton from "../../../commons/buttons/01/CommonButton";
import RedButton from "../../../commons/buttons/02/RedButton";
import CommonLabel from "../../../commons/texts/01/CommonLabel";
import ErrorText from "../../../commons/texts/02/ErrorText";
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

export default function MarketWriteUI(props: any) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUploadProduct : props.onClickUploadProduct
      )}
    >
      <Wrapper>
        <WrapperHeader>
          <TitleWrapper>
            <Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</Title>
          </TitleWrapper>
        </WrapperHeader>
        <WrapperBody>
          <InputWrapper>
            <CommonLabel name="상품명" />
            <InputText type="text" {...props.register("name")} />
          </InputWrapper>
          <ErrorText name={props.formState.errors.name?.message} />
          <InputWrapper>
            <CommonLabel name="한줄요약" />
            <InputText type="text" {...props.register("remarks")} />
            <ErrorText name={props.formState.errors.remarks?.message} />
          </InputWrapper>
          <DetailWrapper>
            <CommonLabel name="상품설명" />
            <DetailText
              onChange={props.onChangeMyContents}
              modules={props.modules}
            />
          </DetailWrapper>
          <ErrorText name={props.formState.errors.contents?.message} />
          <InputWrapper>
            <CommonLabel name="판매가격" />
            <InputText type="text" {...props.register("price")} />
            <ErrorText name={props.formState.errors.price?.message} />
          </InputWrapper>
          <InputWrapper>
            <CommonLabel name="태그입력" />
            <InputText type="text" {...props.register("tags")} />
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
            <RedButton
              onClick={props.onClickMoveToMarketList}
              name="취소하기"
            />
            <CommonButton
              type="submit"
              name={props.isEdit ? "수정하기" : "등록하기"}
            />
          </ButtonWrapper>
        </WrapperFooter>
      </Wrapper>
    </form>
  );
}