import {
  Wrapper,
  WrapperHeader,
  TitleWrapper,
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
  ListNameTitle,
  Row,
  Column,
  ColumnTitle,
  WrapperFooter,
  PageNumber,
  ArrowPhoto,
  Page,
  RegisterBoardButton,
} from "./List.styles";

export default function ListUI(props) {
  return (
    <Wrapper>
      <WrapperHeader>
        <TitleWrapper>
          <BestBoardTitle src="/images/bestboard.png"></BestBoardTitle>
        </TitleWrapper>

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
            <ListNameTitle>제목</ListNameTitle>
            <ListName>작성자</ListName>
            <ListName>날짜</ListName>
          </ListNameList>
          {props.data?.fetchBoards.map((el, index) => (
            <Row key={el._id} id={el._id} onClick={props.onClickDetail}>
              <Column>{10 - index}</Column>{" "}
              {/* 10-index 를 해줘야 10부터 숫자가 시작된다. 1 부터 시작하고 싶으면 index + 1*/}
              <ColumnTitle>{el.title}</ColumnTitle>
              <Column>{el.writer}</Column>
              <Column>{el.createdAt.slice(0, 10)}</Column>
            </Row>
          ))}
        </ListWrapper>
      </WrapperBody>
      <WrapperFooter>
        <div></div>
        <PageNumber>
          <ArrowPhoto onClick={props.onClickPrevPage}>
            <img src="/images/listleft.png" />
          </ArrowPhoto>

          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <Page
                  key={props.startPage + index}
                  onClick={props.onClickPage}
                  id={String(props.startPage + index)}
                  current={props.startPage + index === props.current}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          <ArrowPhoto onClick={props.onClickNextPage}>
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
