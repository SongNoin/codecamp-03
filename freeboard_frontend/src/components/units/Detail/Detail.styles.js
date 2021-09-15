import styled from "@emotion/styled";
import ReactPlayer from "react-player";
export const Wrapper = styled.div`
  width: 1920px;
  padding-top: 80px;
  padding-left: 360px;
  padding-right: 360px;
`;
export const BoardsWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding-top: 80px;
  padding-left: 102px;
  padding-right: 102px;
  padding-bottom: 80px;
`;
export const ProfileWrapper = styled.div`
  width: 996px;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Photo = styled.div`
  width: 46.67px;
  height: 46.67px;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 16.67px;
`;
export const Name = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;
export const Date = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #828282;

  margin-top: 5px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px;
  border-color: #bdbdbd;
`;
export const Link = styled.div``;
export const Map = styled.img`
  margin-left: 29.33px;
`;
export const TitleWrapper = styled.div``;
export const Title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 53px;
`;

export const ImageWrapper = styled.div`
  margin-top: 40px;
`;
export const Image = styled.div`
  width: 996px;
  height: 480px;
  margin-top: 40px;
`;
export const ContentsWrapper = styled.div`
  width: 996px;
  margin-top: 40px;
`;
export const Contents = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
export const YoutubeWrapper = styled.div`
  margin-top: 120px;
`;
export const Youtube = styled(ReactPlayer)``;
export const LikeWrapper = styled.div`
  width: 120px;
  height: 49px;

  margin-top: 163px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LikePhoto = styled.img`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  /* Main */

  color: #ffd600;
  margin-top: 4px;
`;

export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DislikePhoto = styled.img`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;
export const DislikeCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  text-align: center;

  /* Gray 3 */

  color: #828282;
  margin-top: 4px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ListButton = styled.button`
  width: 179px;
  height: 52px;
  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;

  margin-right: 24px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;
  cursor: pointer;
`;
export const DeleteButton = styled.button`
  width: 179px;
  height: 52px;
  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;

  margin-right: 24px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;
  cursor: pointer;
`;
export const EditButton = styled.button`
  width: 179px;
  height: 52px;
  background: #ffffff;
  /* Gray 4 */

  border: 1px solid #bdbdbd;

  margin-right: 24px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  text-align: center;

  /* Black */

  color: #000000;
  cursor: pointer;
`;

export const BottomLine = styled.hr`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;

  margin-top: 87px;
`;
