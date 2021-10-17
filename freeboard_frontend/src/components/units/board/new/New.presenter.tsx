import React, { Component } from "react";

import {
  Wrapper,
  Title,
  WriterWrapper,
  TextWrapper,
  Label,
  Writer,
  Password,
  Subject,
  Contents,
  AddressWrapper,
  AddressNumber,
  SearchButton,
  Address,
  Youtube,
  PhotoWrapper,
  OptionWrapper,
  OptionRadio,
  RadioLabel,
  ButtonWrapper,
  CancelButton,
  SubmitButton,
  Error,
} from "./New.styels";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import CommonButton from "../../../commons/buttons/01/CommonButton";
import RedButton from "../../../commons/buttons/02/RedButton";
import CommonLabel from "../../../commons/texts/01/CommonLabel";

export default function NewWriteUI(props: any) {
  return (
    <Wrapper>
      <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
      <WriterWrapper>
        <TextWrapper>
          <CommonLabel name="작성자" />
          <Writer
            name="writer"
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            readOnly={Boolean(props.data?.fetchBoard.writer)}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <Error>{props.writerError}</Error>
        </TextWrapper>
        <TextWrapper>
          <CommonLabel name="비밀번호" />
          <Password
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <Error>{props.passwordError}</Error>
        </TextWrapper>
      </WriterWrapper>
      <TextWrapper>
        <CommonLabel name="제목" />
        <Subject
          name="subject"
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <Error>{props.titleError}</Error>
      </TextWrapper>
      <TextWrapper>
        <CommonLabel name="내용" />
        <Contents
          name="contents"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <Error>{props.contentsError}</Error>
      </TextWrapper>
      <TextWrapper>
        <CommonLabel name="주소" />
        <AddressWrapper>
          <AddressNumber
            name="addressnumber"
            placeholder="07250"
            readOnly
            value={
              props.myZipcode || props.data?.fetchBoard.boardAddress?.zipcode
            }
          />

          <SearchButton
            onClick={props.onTogleAddress}
            onComplete={props.onCompleteAddressSearch}
          >
            우편번호 검색
          </SearchButton>
          {props.isOpen && (
            <Modal visible={true} onCancel={props.onTogleAddress}>
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </AddressWrapper>
        <Address
          readOnly
          value={
            props.myAddress || props.data?.fetchBoard.boardAddress?.address
          }
        />
        <Address
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.myAddressDetail ||
            props.data?.fetchBoard.boardAddress?.addressDetail
          }
        />
      </TextWrapper>
      <TextWrapper>
        <CommonLabel name="유튜브" />
        <Youtube
          name="youtube"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        />
      </TextWrapper>
      <PhotoWrapper>
        <CommonLabel name="사진" />
        {/* 
        // 1차 이미지 실습
        {props.fileUrls.map((el, index) => (
          <Uploads01
            key={`${el}_${index}`}
            index={index}
            fileUrl={el}
            onChangeFileUrls={props.onChangeFileUrls}
          />
        ))} */}
        {new Array(3).fill(1).map((el, index) => (
          <Uploads01
            key={`${el}_${index}`}
            index={index}
            onChangeFiles={props.onChangeFiles}
            defaultFileUrl={props.data?.fetchBoard.images?.[index]}
          />
        ))}
      </PhotoWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <OptionRadio name="optionradio" type="radio" />
        <RadioLabel>유튜브</RadioLabel>
        <OptionRadio name="optionradio" type="radio" />
        <RadioLabel>사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <RedButton onClick={props.onClickList} name="취소하기" />
        {!props.isEdit && (
          <CommonButton
            onClick={props.onClickSubmit}
            disabled={!props.color}
            name="등록하기"
          />
        )}
        {props.isEdit && (
          <CommonButton
            onClick={props.onClickEdit}
            // disabled={!props.color}
            name="수정하기"
          />
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
