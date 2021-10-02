import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin-top: 40px;
  margin-left: 360px;
  margin-bottom: 40px;
`;

export const CommentsTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;

export const CommentsIcon = styled.div`
  width: 20px;
  height: 20px;

  margin-right: 14px;
`;

export const WriterInfo = styled.div`
  margin-top: 40px;
`;

export const WriterInput = styled.input`
  width: 180px;
  height: 52px;

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  box-sizing: border-box;

  padding-left: 20px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 3 */

  color: #828282;
`;

export const PasswordInput = styled.input`
  width: 180px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;

  margin-left: 24px;
  padding-left: 20px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #828282;
`;
export const RateWrapper = styled.div``;

export const RateInput = styled(Rate)``;

export const CommentsContents = styled.div`
  width: 1200px;
  height: 161px;

  margin-top: 20px;

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  /* Gray 4 */
`;

export const CommentsInput = styled.textarea`
  width: 1200px;
  height: 108px;
  padding-top: 20px;
  padding-left: 20px;

  border: 1px solid #f2f2f2;
  box-sizing: border-box;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 4 */

  color: #bdbdbd;

  resize: none;
`;

export const CommentsRegister = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentsCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 4 */

  color: #bdbdbd;

  padding-top: 14px;
  padding-left: 20px;
`;

export const RegisterButton = styled.button`
  width: 91px;
  height: 52px;
  background: #000000;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* White */

  color: #ffffff;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;
