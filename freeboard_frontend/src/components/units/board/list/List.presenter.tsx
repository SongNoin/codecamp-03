import CommonButton from "../../../commons/buttons/01/CommonButton";

import {
  Wrapper,
  BoardListWrapper,
  WrapperHeader,
  TitleWrapper,
  BestBoardTitle,
  BestBoardContents,
  BestBoardBox,
  BestPhoto1,
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
} from "./List.styles";

export default function ListUI(props: any) {
  return (
    <Wrapper>
      <BoardListWrapper>
        <WrapperHeader>
          <TitleWrapper>
            <BestBoardTitle>Board</BestBoardTitle>
          </TitleWrapper>

          <BestBoardContents>
            {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el) => (
              <BestBoardBox
                key={el._id}
                id={el._id}
                onClick={props.onClickBest}
              >
                <BestPhoto1
                  src={
                    el.images[0]
                      ? `https://storage.googleapis.com/${el.images[0]}`
                      : "/images/noimage.jpg"
                  }
                />
                <BestText>
                  <BestTitle>{el.title}</BestTitle>
                  <BestContents>
                    <BestProfile>
                      <BestName>
                        <ProfilePhoto>
                          <img src="/images/bestphoto.png" />
                        </ProfilePhoto>
                        <ProfileName>{el.writer}</ProfileName>
                      </BestName>
                      <BestDate>{el.createdAt.slice(0, 10)}</BestDate>
                    </BestProfile>
                    <BestLike>
                      <LikePhoto>
                        <img src="/images/bestlike.png" />
                      </LikePhoto>
                      <LikeCount>{el.likeCount}</LikeCount>
                    </BestLike>
                  </BestContents>
                </BestText>
              </BestBoardBox>
            ))}
          </BestBoardContents>
        </WrapperHeader>
        <WrapperBody>
          <Search>
            <SearchBox
              name="searchTitle"
              type="text"
              placeholder="🔎 제목을 검색해주세요."
              onChange={props.onChangeSearch}
            ></SearchBox>
            <SearchDate
              name="searchDate"
              type="text"
              placeholder="YYYY.MM.DD ~ YYYY.MM.DD"
            ></SearchDate>
            <SearchButton>
              <ButtonName onClick={props.onClickSearch}>검색하기</ButtonName>
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
                <Column>{10 - index}</Column>
                {/* 10-index 를 해줘야 10부터 숫자가 시작된다. 1 부터 시작하고 싶으면 index + 1 */}
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
          <CommonButton name="✏ 게시물 등록하기" onClick={props.onClickWrite} />
        </WrapperFooter>
      </BoardListWrapper>
    </Wrapper>
  );
}
