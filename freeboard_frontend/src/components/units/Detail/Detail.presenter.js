import {
  Wrapper,
  ProfileWrapper,
  ProfileInfo,
  Photo,
  Profile,
  Name,
  Date,
  Info,
  Line,
  Link,
  Map,
  TitleWrapper,
  Title,
  ImageWrapper,
  Image,
  ContentsWrapper,
  Contents,
  YoutubeWrapper,
  Youtube,
  LikeWrapper,
  Like,
  LikePhoto,
  LikeCount,
  Dislike,
  DislikePhoto,
  DislikeCount,
} from "./Detail.styles";

export default function DetailUI(props) {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileInfo>
          <Photo>
            <img src="/images/photo.png" />{" "}
            {/*  img에도 상수이름을 지을 수 있다.  ex ) <Photo =img src="/images/photo.png" />  */}
          </Photo>
          <Profile>
            <Name>{props.data && props.data.fetchBoard.writer}</Name>
            <Date>Date : 2021.02.18</Date>
          </Profile>
        </ProfileInfo>
        <Info>
          <Link>
            <img src="/images/link.png" />
          </Link>
          <Map>
            <img src="/images/map2.png" />
          </Map>
        </Info>
      </ProfileWrapper>
      <Line>
        <hr />
      </Line>
      <ImageWrapper>
        <TitleWrapper>
          <Title>{props.data && props.data.fetchBoard.title}</Title>
        </TitleWrapper>
        <Image>
          <img src="/images/party.png" />
        </Image>
      </ImageWrapper>
      <ContentsWrapper>
        <Contents>{props.data && props.data.fetchBoard.contents}</Contents>
      </ContentsWrapper>
      <YoutubeWrapper>
        <Youtube>
          <img src="/images/youtube.png" />
        </Youtube>
      </YoutubeWrapper>
      <LikeWrapper>
        <Like>
          <LikePhoto>
            <img src="/images/like.png" />
          </LikePhoto>
          <LikeCount>1920</LikeCount>
        </Like>
        <Dislike>
          <DislikePhoto>
            <img src="/images/dislike.png" />
          </DislikePhoto>
          <DislikeCount>1920</DislikeCount>
        </Dislike>
      </LikeWrapper>
    </Wrapper>
  );
}