import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 70px 350px 0px 230px;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const PhotoLine = styled.div`
  height: 650px;
  margin-left: 5px;

  display: flex;
  flex-direction: column;
`;
export const Photo = styled.img`
  width: 240px;
  margin-bottom: 5px;
`;
export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;
export const TitleWrapper = styled.div`
  margin-top: 30px;
`;
export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;

  margin-bottom: 10px;
`;
export const SubTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;

  display: flex;
  align-items: center;
`;

export const Logo = styled.span`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  margin-right: 10px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Info = styled.input`
  width: 420px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;

  font-family: Noto Sans CJK KR;

  margin-top: 20px;
  padding-left: 20px;
`;

export const Error = styled.div`
  font-family: Noto Sans CJK KR;
  color: red;
  margin-left: 10px;
  margin-top: 5px;
`;
export const SignUpButton = styled.button`
  width: 420px;
  height: 52px;

  font-family: Noto Sans CJK KR;
  font-weight: 600;

  font-size: 20px;

  border-radius: 5px;
  border: 0px;
  background-color: #3486ff;
  color: white;
  margin-top: 30px;
  cursor: pointer;
  :hover {
    background-color: #81d8b1;
  }
`;
