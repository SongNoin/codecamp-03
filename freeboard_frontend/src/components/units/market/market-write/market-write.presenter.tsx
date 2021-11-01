import CommonButton from "../../../commons/buttons/01/CommonButton";
import RedButton from "../../../commons/buttons/02/RedButton";
import CommonLabel from "../../../commons/texts/01/CommonLabel";
import ErrorText from "../../../commons/texts/02/ErrorText";
import Uploads02 from "../../../commons/uploads/02/Uploads02.container";
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
        props.isEdit ? props.onClickUpdateProduct : props.onClickUploadProduct
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
            <InputText
              type="text"
              {...props.register("name")}
              defaultValue={props.data?.fetchUseditem.name}
            />
          </InputWrapper>
          <ErrorText name={props.formState.errors.name?.message} />
          <InputWrapper>
            <CommonLabel name="한줄요약" />
            <InputText
              type="text"
              {...props.register("remarks")}
              defaultValue={props.data?.fetchUseditem.remarks}
            />
            <ErrorText name={props.formState.errors.remarks?.message} />
          </InputWrapper>
          <DetailWrapper>
            <CommonLabel name="상품설명" />
            {props.isEdit ? (
              <>
                {props.data?.fetchUseditem.contents && (
                  <DetailText // quill
                    onChange={props.onChangeMyContents}
                    modules={props.modules}
                    defaultValue={props.data?.fetchUseditem.contents}
                  />
                )}
              </>
            ) : (
              <DetailText // quill
                onChange={props.onChangeMyContents}
                modules={props.modules}
              />
            )}
          </DetailWrapper>
          <ErrorText name={props.formState.errors.contents?.message} />
          <InputWrapper>
            <CommonLabel name="판매가격" />
            <InputText
              type="text"
              {...props.register("price")}
              defaultValue={props.data?.fetchUseditem.price}
            />
            <ErrorText name={props.formState.errors.price?.message} />
          </InputWrapper>
          <InputWrapper>
            <CommonLabel name="태그입력" />
            <InputText
              type="text"
              {...props.register("tags")}
              defaultValue={props.data?.fetchUseditem.tags}
            />
          </InputWrapper>
          <MapWrapper>
            <LocationWrapper>
              <CommonLabel name="거래위치" />
              <Location id="map"></Location>
            </LocationWrapper>
            <AddressWrapper>
              <GPSWrapper>
                <CommonLabel name="GPS" />
                <GPSTextWrapper>
                  <GPSText type="text" value={props.myLat} readOnly />
                  <GPSText type="text" value={props.myLng} readOnly />
                </GPSTextWrapper>
              </GPSWrapper>
              <Address>
                <CommonLabel name="주소" />
                <AddressText type="text" value={props.myAddress} readOnly />
                <AddressText
                  type="text"
                  onChange={props.onChangeAddressDetail}
                />
              </Address>
            </AddressWrapper>
          </MapWrapper>
          <PhotoWrapper>
            <CommonLabel name="사진 첨부" />
            <ProductPhotoWrapper>
              {new Array(3).fill(1).map((el, index) => (
                <Uploads02
                  key={`${el}_${index}`}
                  index={index}
                  onChangeFiles={props.onChangeFiles}
                  defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                />
              ))}
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
