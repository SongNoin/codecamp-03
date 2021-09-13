import {
  Wrapper,
  WrapperHeader,
  BestBoardTitle,
  BestBoardContents,
  BestBoardBox,
  BestPhoto1,
  BestPhoto2,
  BestPhoto3,
  BestPhoto4,
  BestText,
  BestTitle,
  BestContents,
  BestProfile,
  BestName,
  ProfilePhoto,
  ProfileName,
  BestDate,
  BestLike,
  LikePhoto,
  LikeCount,
  WrapperBody,
  Search,
  SearchBox,
  SearchDate,
  SearchButton,
  ButtonName,
  ListWrapper,
  ListNameList,
  ListName,
  Row,
  Column,
  TitleToDetail,
  WrapperFooter,
  PageNumber,
  ArrowPhoto,
  Number1,
  Number2,
  RegisterBoardButton,
} from "./List.styles";

export default function ListUI(props) {
  return (
    <Wrapper>
      <WrapperHeader>
        <BestBoardTitle>베스트 게시글</BestBoardTitle>
        <BestBoardContents>
          <BestBoardBox>
            <BestPhoto1></BestPhoto1>
            <BestText>
              <BestTitle>게시물 제목입니다.</BestTitle>
              <BestContents>
                <BestProfile>
                  <BestName>
                    <ProfilePhoto>
                      <img src="/images/bestphoto.png" />
                    </ProfilePhoto>
                    <ProfileName>노원두</ProfileName>
                  </BestName>
                  <BestDate>Date:2021.02.18</BestDate>
                </BestProfile>
                <BestLike>
                  <LikePhoto>
                    <img src="/images/bestlike.png" />
                  </LikePhoto>
                  <LikeCount>356</LikeCount>
                </BestLike>
              </BestContents>
            </BestText>
          </BestBoardBox>
          <BestBoardBox>
            <BestPhoto2></BestPhoto2>
            <BestText>
              <BestTitle>게시물 제목입니다.</BestTitle>
              <BestContents>
                <BestProfile>
                  <BestName>
                    <ProfilePhoto>
                      <img src="/images/bestphoto.png" />
                    </ProfilePhoto>
                    <ProfileName>노원두</ProfileName>
                  </BestName>
                  <BestDate>Date:2021.02.18</BestDate>
                </BestProfile>
                <BestLike>
                  <LikePhoto>
                    <img src="/images/bestlike.png" />
                  </LikePhoto>
                  <LikeCount>356</LikeCount>
                </BestLike>
              </BestContents>
            </BestText>
          </BestBoardBox>
          <BestBoardBox>
            <BestPhoto3></BestPhoto3>
            <BestText>
              <BestTitle>게시물 제목입니다.</BestTitle>
              <BestContents>
                <BestProfile>
                  <BestName>
                    <ProfilePhoto>
                      <img src="/images/bestphoto.png" />
                    </ProfilePhoto>
                    <ProfileName>노원두</ProfileName>
                  </BestName>
                  <BestDate>Date:2021.02.18</BestDate>
                </BestProfile>
                <BestLike>
                  <LikePhoto>
                    <img src="/images/bestlike.png" />
                  </LikePhoto>
                  <LikeCount>356</LikeCount>
                </BestLike>
              </BestContents>
            </BestText>
          </BestBoardBox>
          <BestBoardBox>
            <BestPhoto4></BestPhoto4>
            <BestText>
              <BestTitle>게시물 제목입니다.</BestTitle>
              <BestContents>
                <BestProfile>
                  <BestName>
                    <ProfilePhoto>
                      <img src="/images/bestphoto.png" />
                    </ProfilePhoto>
                    <ProfileName>노원두</ProfileName>
                  </BestName>
                  <BestDate>Date:2021.02.18</BestDate>
                </BestProfile>
                <BestLike>
                  <LikePhoto>
                    <img src="/images/bestlike.png" />
                  </LikePhoto>
                  <LikeCount>356</LikeCount>
                </BestLike>
              </BestContents>
            </BestText>
          </BestBoardBox>
        </BestBoardContents>
      </WrapperHeader>
      <WrapperBody>
        <Search>
          <SearchBox
            name="searchTitle"
            type="text"
            placeholder="🔎 제목을 검색해주세요."
          ></SearchBox>
          <SearchDate
            name="searchDate"
            type="text"
            placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
          ></SearchDate>
          <SearchButton>
            <ButtonName>검색하기</ButtonName>
          </SearchButton>
        </Search>
        <ListWrapper>
          <ListNameList>
            <ListName>번호</ListName>
            <ListName>제목</ListName>
            <ListName>작성자</ListName>
            <ListName>날짜</ListName>
          </ListNameList>
          {props.data?.fetchBoards.map((el, index) => (
            <Row key={el._id}>
              <Column>{10 - index}</Column>{" "}
              {/* 10-index 를 해줘야 10부터 숫자가 시작된다. 1 부터 시작하고 싶으면 index + 1*/}
              <TitleToDetail id={el._id} onClick={props.onClickDetail}>
                {el.title}
              </TitleToDetail>
              <Column>{el.writer}</Column>
              <Column>{el.createdAt.slice(0, 10)}</Column>
            </Row>
          ))}
        </ListWrapper>
      </WrapperBody>
      <WrapperFooter>
        <PageNumber>
          <ArrowPhoto>
            <img src="/images/listleft.png" />
          </ArrowPhoto>
          <Number1>1</Number1>
          <Number2>2</Number2>
          <ArrowPhoto>
            <img src="/images/listright.png" />
          </ArrowPhoto>
        </PageNumber>
        <RegisterBoardButton onClick={props.onClickWrite}>
          ✏ 게시물 등록하기
        </RegisterBoardButton>
      </WrapperFooter>
    </Wrapper>
  );
}
