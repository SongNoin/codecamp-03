import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoardListWrapper = styled.div`
  width: 1200px;
  padding-top: 80px;

  padding-bottom: 405px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WrapperHeader = styled.div`
  width: 100%;
  height: 539px;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BestBoardTitle = styled.div`
  font-family: LogoFont;
  font-style: "normal";
  font-size: 200px;
  text-align: center;
  font-weight: bold;
  line-height: 27px;

  color: black;
  text-shadow: 6px 6px #ffe87f;
`;
export const BestBoardContents = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
`;
export const BestBoardBox = styled.div`
  width: 282px;
  height: 257px;

  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  /* background-image: url("/images/bestboard1.png"); */
  cursor: pointer;
  :hover {
    background-color: #81d8b1;
  }
`;
export const BestPhoto1 = styled.img`
  width: 282px;
  height: 45%;
`;

export const BestText = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

export const BestTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;
export const BestContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const BestProfile = styled.div``;
export const BestName = styled.div`
  display: flex;
`;
export const ProfilePhoto = styled.div``;
export const ProfileName = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #000000;

  margin-left: 6px;
`;
export const BestDate = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  /* Gray 3 */

  color: #828282;
`;

export const BestLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LikePhoto = styled.div``;
export const LikeCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;
`;

export const WrapperBody = styled.div`
  width: 100%;
  height: 768px;
  margin-top: 80px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SearchBox = styled.input`
  width: 776px;
  height: 52px;
  padding-left: 16px;
  background: #f2f2f2;
  border-radius: 10px;
  border: 1px solid #f2f2f2;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #000000;
`;
export const SearchDate = styled.input`
  width: 244px;
  height: 52px;
  left: 1178px;
  top: 1115px;

  /* White */

  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #bdbdbd;
  padding-left: 16px;
`;
export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  background: #000000;
  border-radius: 10px;
`;
export const ButtonName = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* White */

  color: #ffffff;
`;
export const ListWrapper = styled.div`
  width: 1200px;
  height: 583px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 40px;
`;

export const ListNameList = styled.div`
  height: 52px;
  display: flex;
`;

export const ListName = styled.div`
  width: 10%;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Black */

  color: #000000;
`;

export const ListNameTitle = styled.div`
  width: 70%;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Black */

  color: #000000;
`;
export const Row = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: #81d8b1;
  }

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;
`;
export const Column = styled.div`
  width: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ColumnTitle = styled.div`
  width: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperFooter = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageNumber = styled.div`
  width: 120px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArrowPhoto = styled.div`
  cursor: pointer;
`;

export const Number1 = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  /* Gray 2 */

  color: #4f4f4f;
`;
export const Number2 = styled.div`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;

  /* Main */

  color: #ffd600;
`;
export const RegisterBoardButton = styled.button`
  width: 171px;
  height: 52px;
  /* Gray 6 */

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* White */
  background: #ffffff;
  /* Gray 6 */

  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 10px;

  cursor: pointer;
  :hover {
    background-color: #81d8b1;
  }
`;

export const Page = styled.div<{ current: boolean }>`
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => (props.current === true ? "#81d8b1" : "black")};
`;
