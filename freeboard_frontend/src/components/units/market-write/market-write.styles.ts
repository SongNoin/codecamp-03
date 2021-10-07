import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 60px;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 100px;

  margin-top: 80px;
  margin-left: 360px;
  margin-right: 360px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
export const WrapperHeader = styled.div``;
export const TitleWrapper = styled.div`
  padding-top: 40px;
`;
export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  color: #000000;
`;
export const WrapperBody = styled.div`
  padding-top: 80px;
`;
export const InputWrapper = styled.div`
  padding-top: 40px;
`;
export const InputName = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
  /* Black */

  color: #000000;
`;
export const DetailWrapper = styled.div`
  padding-top: 40px;
`;

export const DetailText = styled.textarea`
  width: 100%;
  height: 320px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  resize: none;
`;
export const InputText = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const MapWrapper = styled.div`
  padding-top: 40px;

  display: flex;
  flex-direction: row;
`;

export const LocationWrapper = styled.div``;

export const Location = styled.div`
  width: 384px;
  height: 252px;
  background-color: gray;
`;

export const AddressWrapper = styled.div`
  margin-left: 24px;
`;

export const GPSWrapper = styled.div``;

export const GPSTextWrapper = styled.div``;

export const GPSText = styled.input`
  width: 108px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;

  margin-right: 56px;
`;

export const Address = styled.div`
  margin-top: 40px;
`;

export const AddressText = styled.input`
  width: 588px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;

  margin-bottom: 16px;
`;

export const PhotoWrapper = styled.div`
  padding-top: 40px;
`;

export const ProductPhotoWrapper = styled.div`
  display: flex;
`;

export const ProductPhoto = styled.div`
  width: 180px;
  height: 180px;
  background-color: gray;
  margin-right: 24px;
`;

export const OptionWrapper = styled.div`
  padding-top: 40px;
`;

export const Option = styled.input`
  margin-right: 10px;
`;
export const RadioName = styled.span`
  margin-right: 24px;
`;
export const WrapperFooter = styled.div``;
export const ButtonWrapper = styled.div`
  padding-top: 80px;

  display: flex;
  justify-content: center;
`;
export const UploadButton = styled.button`
  width: 179px;
  height: 52px;
  background: #bdbdbd;
  border: none;
  cursor: pointer;

  margin-right: 24px;
  :hover {
    background-color: #ffd600;
  }
`;