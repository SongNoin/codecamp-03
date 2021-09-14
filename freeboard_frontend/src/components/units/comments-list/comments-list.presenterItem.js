import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsWrite from "../comments-write/comments-write.container";

import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./comments-list.queries";

import {
  CommentsWrapper,
  CommentsInfo,
  CommentsPhoto,
  CommentsText,
  CommentsWriter,
  Comments,
  CommentsDate,
  CommentsButtonWrapper,
  CommentsEditButton,
  CommentsDeleteButton,
} from "./comments-list.styles";

export default function CommentsListUIItem(props) {
  const router = useRouter();
  const [isCommentEdit, setIsCommentEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  async function onClickDelete(event) {
    const myPassword = prompt("비밀번호를 입력해 주세요");
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
      console.log(error.message);
    }
  }

  function onClickEdit() {
    setIsCommentEdit(true);
  }

  return (
    <>
      {!isCommentEdit && (
        <CommentsWrapper>
          <CommentsInfo>
            <CommentsPhoto>
              <img src="/images/photo.png" />
            </CommentsPhoto>
            <CommentsText>
              <CommentsWriter>{props.el?.writer}</CommentsWriter>
              <Comments>{props.el?.contents}</Comments>
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
              onClick={onClickDelete}
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
    </>
  );
}
