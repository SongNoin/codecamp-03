import styled from "@emotion/styled";
export const Wrapper = styled.div`
  background-image: url("/images/pizza.png");
  width: 640px;
  height: 1138px;
  padding-top: 224px;
  padding-left: 50px;
  padding-right: 50px;

  display: flex;
  flex-direction: column;
`;
export const Logo = styled.div`
  height: 189px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BrandPhoto = styled.div`
  width: 100px;
  height: 100px;
`;
export const BrandName = styled.div`
  text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);
  font-family: SpoqaHanSans;
  font-size: 60px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -2px;
  color: #fff;
`;
export const LoginArea = styled.div`
  width: 540px;
  height: 146px;
  margin-top: 168px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Id = styled.input`
  width: 540px;

  opacity: 0.6;
  font-family: SpoqaHanSans;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
  letter-spacing: normal;
  color: #fff;
  background-color: transparent;
`;
export const Password = styled.input`
  width: 540px;

  opacity: 0.6;
  font-family: SpoqaHanSans;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
  letter-spacing: normal;
  color: #fff;
`;
export const Login = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const LoginButton = styled.button`
  width: 540px;
  height: 76px;

  font-family: SpoqaHanSans;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: center;
  color: black;

  opacity: 0.2;
  border-radius: 38px;
  background-color: #fff;
`;
export const LoginInfo = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const RegisterButton = styled.div`
  font-family: SpoqaHanSans;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #fff;
`;
export const KakaoLogin = styled.div`
  margin-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const KakaoLoginButton = styled.button`
  width: 540px;
  height: 76px;

  font-family: SpoqaHanSans;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.81;
  letter-spacing: normal;
  text-align: center;
  color: #f3db02;

  opacity: 0.6;
  border-radius: 38px;
  border: solid 2px #f3db02;
`;
