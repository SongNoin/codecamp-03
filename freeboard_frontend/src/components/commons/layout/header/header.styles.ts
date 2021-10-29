import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  /* background-color: yellowgreen; */
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  /* margin-right: 20px; */
  margin-left: 30px;
  font-family: LogoFont;
  font-style: "normal";
  font-size: 60px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #81d8b1;

  cursor: pointer;
  :hover {
    font-size: 70px;
  }
`;

export const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 30px;
`;

export const MenuTitle = styled.div`
  margin-right: 20px;
  font-style: "normal";
  font-family: LogoFont;

  font-size: 40px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #ffe87f;

  cursor: pointer;
  :hover {
    font-size: 50px;
  }
`;

export const MyWrapper = styled.div`
  height: 100%;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyTitle = styled.div`
  margin-right: 20px;
  font-style: "normal";
  font-family: LogoFont;

  font-size: 40px;
  text-align: center;
  font-weight: bolder;
  line-height: 27px;

  color: black;
  text-shadow: 2px 2px #f7c6ff;

  cursor: pointer;
  :hover {
    font-size: 50px;
  }
`;

export const MyPicture = styled.img`
  height: 65px;
  width: 65px;
  margin-right: 40px;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    height: 75px;
    width: 75px;
  }
`;
