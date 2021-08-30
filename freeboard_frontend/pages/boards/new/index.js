import {
  Wrapper,
  Wrapper__head,
  Title,
  Wrapper__body,
  Body__title,
  Item,
  Title__content,
  Body__content,
  Content__content,
  Address,
  Address__search,
  Address__number,
  Address__button,
  Address__content,
  Youtube,
  Youtube__content,
  Photo,
  Photo__upload,
  Photo__list,
  Plus,
  Upload,
  Main__set,
  Select,
  Select__content,
  Wrapper__footer,
  Registration,
} from "../../../styles/boards";

export default function BoardsNewPage() {
  return (
    <Wrapper>
      <Wrapper__head>
        <Title>게시글 등록</Title>
      </Wrapper__head>
      <Wrapper__body>
        <Body__title>
          <Item>제목</Item>
          <Title__content type="box" placeholder="제목을 작성해주세요." />
        </Body__title>
        <Body__content>
          <Item>내용</Item>
          <Content__content type="box" placeholder="내용을 작성해주세요." />
        </Body__content>
        <Address>
          <Item>주소</Item>
          <Address__search>
            <Address__number type="box" placeholder="07250" />
            <Address__button type="button" value="우편번호 검색" />
          </Address__search>
          <Address__content type="box" />
          <Address__content type="box" />
        </Address>
        <Youtube>
          <Item>유튜브</Item>
          <Youtube__content type="box" placeholder="링크를 복사해주세요." />
        </Youtube>
        <Photo>
          <Item>사진첨부</Item>
          <Photo__upload>
            <Photo__list>
              <Plus>+</Plus>
              <Upload>Upload</Upload>
            </Photo__list>
            <Photo__list>
              <Plus>+</Plus>
              <Upload>Upload</Upload>
            </Photo__list>
            <Photo__list>
              <Plus>+</Plus>
              <Upload>Upload</Upload>
            </Photo__list>
          </Photo__upload>
        </Photo>
        <Main__set>
          <Item>메인 설정</Item>
          <Select type="radio" />
          <Select__content>유튜브</Select__content>
          <Select type="radio" />
          <Select__content>사진</Select__content>
        </Main__set>
      </Wrapper__body>
      <Wrapper__footer>
        <Registration type="button" value="등록하기" />
      </Wrapper__footer>
    </Wrapper>
  );
}
