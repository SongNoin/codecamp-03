import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  /* margin-left: 360px; */
`;

export const TitleWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitlePhoto = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;
export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const InputCommentBox = styled.div`
  width: 1200px;
  height: 161px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const CommentInput = styled.textarea`
  height: 109px;
  border: 1px solid #bdbdbd;
  resize: none;
  padding-top: 20px;
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
  width: 1109px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: none;
`;
