import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 90px;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 350px;
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
  font-family: LogoFont;
  font-style: "normal";
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #00bfa5;
  margin-right: 10px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
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
