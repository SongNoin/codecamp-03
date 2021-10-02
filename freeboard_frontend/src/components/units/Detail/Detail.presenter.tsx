import React, { Component } from "react";

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
  BoardsWrapper,
  ButtonWrapper,
  ListButton,
  DeleteButton,
  EditButton,
  BottomLine,
} from "./Detail.styles";
import { Tooltip } from "antd";

export default function DetailUI(props: any) {
  return (
    <Wrapper>
      <BoardsWrapper>
        <ProfileWrapper>
          <ProfileInfo>
            <Photo>
              <img src="/images/photo.png" />
              {/*  img에도 상수이름을 지을 수 있다.  ex ) <Photo =img src="/images/photo.png" />  */}
            </Photo>
            <Profile>
              <Name>{props.data?.fetchBoard.writer}</Name>
              <Date>
                {props.data?.fetchBoard.createdAt.slice(0, 10) + " "}
                {props.data?.fetchBoard.createdAt.slice(11, 19)}
              </Date>
            </Profile>
          </ProfileInfo>
          <Info>
            <Link>
              <img src="/images/link.png" />
            </Link>
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <Map src="/images/map2.png" />
            </Tooltip>
          </Info>
        </ProfileWrapper>
        <Line>
          <hr />
        </Line>
        <ImageWrapper>
          <TitleWrapper>
            <Title>{props.data?.fetchBoard.title}</Title>
          </TitleWrapper>
          {/*
          <Image
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
          />
          <Image
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[1]}`}
          />
          <Image
            src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[2]}`}
          /> 
          */}
          {props.data?.fetchBoard.images
            ?.filter((el) => el)
            .map((el) => (
              <Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
        </ImageWrapper>
        <ContentsWrapper>
          <Contents>{props.data?.fetchBoard.contents}</Contents>
        </ContentsWrapper>
        <YoutubeWrapper>
          <Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width={486}
            height={240}
          />
        </YoutubeWrapper>
        <LikeWrapper>
          <Like>
            <LikePhoto
              onClick={props.onClickLike}
              id={props.data?.fetchBoard._id}
              src="/images/like.png"
            />

            <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
          </Like>
          <Dislike>
            <DislikePhoto
              onClick={props.onClickDislike}
              id={props.data?.fetchBoard._id}
              src="/images/dislike.png"
            />
            <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
          </Dislike>
        </LikeWrapper>
      </BoardsWrapper>
      <ButtonWrapper>
        <ListButton onClick={props.onClickList}>목록으로</ListButton>
        <DeleteButton
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </DeleteButton>
        <EditButton onClick={props.onClickMoveToEdit}>수정하기</EditButton>
      </ButtonWrapper>
      <BottomLine></BottomLine>
    </Wrapper>
  );
}
