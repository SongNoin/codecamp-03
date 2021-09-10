import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import {
  Wrapper,
  CommentsTitle,
  CommentsIcon,
  WriterInfo,
  WriterInput,
  PasswordInput,
  CommentsContents,
  CommentsInput,
  RegisterButton,
  CommentsRegister,
  CommentsCount,
  WrapperFooter,
  CommentsWrapper,
  CommentsInfo,
  CommentsPhoto,
  CommentsText,
  RatingWrapper,
  CommentsWriter,
  RatingInput,
  CommentsRating,
  Comments,
  CommentsDate,
  CommentsButtonWrapper,
  CommentsEditButton,
  CommentsDeleteButton,
} from "./comments.styles";

export default function CommentsUI(props) {
  return (
    <Wrapper>
      <CommentsTitle>
        <CommentsIcon>
          <img src="/images/commentsicon.png" />
        </CommentsIcon>
        댓글
      </CommentsTitle>
      <WriterInfo>
        <WriterInput
          name="writerinput"
          type="text"
          placeholder="작성자"
          onChange={props.onChangeWriter}
        ></WriterInput>
        <PasswordInput
          name="passwordinput"
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        ></PasswordInput>
        <RatingInput name="ratinginput" type="text"></RatingInput>
      </WriterInfo>
      <CommentsContents>
        <CommentsInput
          name="commentsinput"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
        ></CommentsInput>
        <CommentsRegister>
          <CommentsCount>0/100</CommentsCount>
          <RegisterButton onClick={props.onClickRegister}>
            등록하기
          </RegisterButton>
        </CommentsRegister>
      </CommentsContents>
      <WrapperFooter>
        <CommentsWrapper>
          <CommentsInfo>
            <CommentsPhoto>
              <img src="/images/photo.png" />
            </CommentsPhoto>
            <CommentsText>
              <RatingWrapper>
                <CommentsWriter>노원두</CommentsWriter>
              </RatingWrapper>
              <Comments>어쩌구 저쩌구</Comments>
              <CommentsDate>2021.02.22</CommentsDate>
            </CommentsText>
          </CommentsInfo>
          <CommentsButtonWrapper>
            <CommentsEditButton>
              <img src="/images/editicon.png" />
            </CommentsEditButton>
            <CommentsDeleteButton>
              <img src="/images/deleteicon.png" />
            </CommentsDeleteButton>
          </CommentsButtonWrapper>
        </CommentsWrapper>
        <hr />
      </WrapperFooter>
    </Wrapper>
  );
}
