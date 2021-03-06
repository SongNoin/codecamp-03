import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsWrite from "../comments-write/comments-write.container";
import { Modal } from "antd";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./comments-list.queries";

import {
  Wrapper,
  CommentsWrapper,
  CommentsInfo,
  CommentsPhoto,
  CommentsText,
  CommentsWriter,
  CommentsRate,
  Comments,
  CommentsDate,
  CommentsButtonWrapper,
  CommentsEditButton,
  CommentsDeleteButton,
  PasswordInput,
} from "./comments-list.styles";

export default function CommentsListUIItem(props) {
  const router = useRouter();
  const [isCommentEdit, setIsCommentEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  async function onClickDelete() {
    // const myPassword = prompt("비밀번호를 입력해 주세요");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: props.el?._id,
          password: myPassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.number },
          },
        ],
      });
      alert("댓글을 삭제합니다~");
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickEdit() {
    setIsCommentEdit(true);
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onChangeDeletePassword(event) {
    setMyPassword(event.target.value);
  }

  function closeModal() {
    setIsOpenDeleteModal(false);
  }

  return (
    <>
      <Wrapper>
        {isOpenDeleteModal && (
          <Modal visible={true} onOk={onClickDelete} onCancel={closeModal}>
            <div>비밀번호 입력: </div>
            <PasswordInput type="password" onChange={onChangeDeletePassword} />
          </Modal>
        )}
        {!isCommentEdit && (
          <CommentsWrapper>
            <CommentsInfo>
              <CommentsPhoto src="/images/photo.png" />
              <CommentsText>
                <CommentsWriter>{props.el?.writer}</CommentsWriter>
                <Comments>{props.el?.contents}</Comments>
                <CommentsRate value={props.el?.rating} disabled />
                <CommentsDate>{props.el?.createdAt.slice(0, 10)}</CommentsDate>
              </CommentsText>
            </CommentsInfo>
            <CommentsButtonWrapper>
              <CommentsEditButton
                src="/images/editicon.png"
                onClick={onClickEdit}
              ></CommentsEditButton>
              <CommentsDeleteButton
                src="/images/deleteicon.png"
                id={props.el?._id}
                onClick={onClickOpenDeleteModal}
              ></CommentsDeleteButton>
            </CommentsButtonWrapper>
          </CommentsWrapper>
        )}
        {isCommentEdit && (
          <CommentsWrite
            isCommentEdit={isCommentEdit}
            setIsCommentEdit={setIsCommentEdit}
            el={props.el}
          />
        )}
      </Wrapper>
    </>
  );
}
