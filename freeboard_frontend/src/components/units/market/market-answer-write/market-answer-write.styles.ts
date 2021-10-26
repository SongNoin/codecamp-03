import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Arrow = styled.img`
  width: 15px;
  height: 17px;
`;
export const InputCommentBox = styled.div`
  width: 1096px;
  height: 117px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
export const CommentInput = styled.input`
  height: 65px;
  border: 1px solid #bdbdbd;
  resize: none;
  padding-left: 20px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentCountInput = styled.div`
  width: 1005px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: none;
`;
