import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin-top: 30px;
  margin-left: 360px;
  margin-right: 360px;

  display: flex;
  flex-direction: column;
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
`;
export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  border-radius: 50%;
`;
export const UserInfo = styled.div`
  margin-left: 16px;
`;
export const UserName = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const Comment = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
`;
export const CreatedAt = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
  margin-top: 20px;
`;
export const ButtonWrapper = styled.div`
  margin-bottom: 60px;
`;
export const Button = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 16px;
  cursor: pointer;
`;
export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Line = styled.hr`
  width: 1200px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
`;
