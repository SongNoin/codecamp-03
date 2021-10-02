import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 80px;
  /* background-color: yellowgreen; */
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.img`
  margin-left: 40px;
  height: 90%;
  cursor: pointer;
  :hover {
    height: 100%;
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

export const Menu = styled.img`
  height: 90%;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    height: 100%;
  }
`;

export const MyWrapper = styled.div`
  height: 100%;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const My = styled.img`
  height: 80%;
  margin-right: 20px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    height: 90%;
  }
`;
