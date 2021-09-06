import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 60px;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 100px;
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
export const WriterWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextWrapper = styled.div`
  padding-top: 40px;
`;
export const Label = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
  /* Black */

  color: #000000;
`;
export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Subject = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Contents = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;
export const AddressWrapper = styled.div``;
export const AddressNumber = styled.input`
  width: 77px;
  height: 52px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;

  padding-left: 16px;

  border: 1px solid #bdbdbd;
`;
export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  left: 555px;
  top: 1749px;
  background: #000000;
  cursor: pointer;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  margin-left: 16px;
`;
export const Address = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  cursor: pointer;

  margin-top: 16px;
`;
export const Youtube = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;
export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  border: none;
  cursor: pointer;
`;
export const PhotoWrapper = styled.div`
  margin-top: 40px;
`;
export const OptionWrapper = styled.div`
  margin-top: 40px;
`;
export const OptionRadio = styled.input``;
export const RadioLabel = styled.span``;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`;
export const CancelButton = styled.button`
  width: 179px;
  height: 52px;
  background: #bdbdbd;
  border: none;
  cursor: pointer;

  margin-right: 24px;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background: #ffd600;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.color === true ? "yellow" : "gray")};
`;

export const Error = styled.div`
  margin-top: 10px;
  color: red;
`;
