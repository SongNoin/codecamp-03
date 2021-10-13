import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;

  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: 360px;
`;

export const TitleWrapper = styled.div`
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
export const RegisterButton = styled.button`
  width: 91px;
  height: 52px;
  background-image: linear-gradient(
    to right,
    #e0eafc 0%,
    #35c584 90%,
    #35c584 100%
  );
  /* padding: 15px 45px; */
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  display: block;
  border: none;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;
