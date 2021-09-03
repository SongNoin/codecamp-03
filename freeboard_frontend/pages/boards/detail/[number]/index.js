import { useRouter } from "next/router";
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
} from "../../../../styles/detail";

import { useQuery, gql } from "@apollo/client";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function Detail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileInfo>
          <Photo>
            <img src="/images/photo.png" />
          </Photo>
          <Profile>
            <Name>노원두</Name>
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
          <Title>게시글 제목입니다.</Title>
        </TitleWrapper>
        <Image>
          <img src="/images/party.png" />
        </Image>
      </ImageWrapper>
      <ContentsWrapper>
        <Contents>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </Contents>
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
