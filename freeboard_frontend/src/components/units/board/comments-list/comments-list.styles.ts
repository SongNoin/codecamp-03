import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentsWrapper = styled.div`
  height: 130px;
  width: 1200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;

  margin-top: 20px;
`;

export const CommentsInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentsPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const CommentsText = styled.div`
  margin-left: 16px;
`;
export const CommentsWriter = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;

export const CommentsRate = styled(Rate)``;
export const Comments = styled.div`
  margin-top: 4px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Gray 2 */

  color: #4f4f4f;
`;
export const CommentsDate = styled.div`
  margin-top: 20px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  /* Gray 4 */

  color: #bdbdbd;
`;
export const CommentsButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentsEditButton = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 16px;
  cursor: pointer;
`;
export const CommentsDeleteButton = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const EditComments = styled.div``;

export const EditButton = styled.button`
  width: 91px;
  height: 52px;
  background: #ffd600;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;

  cursor: pointer;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
