import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsUI from "./comments.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./comments.queries";

export default function Comments() {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.number },
  });

  const [myWriter, setWriter] = useState("");
  const [myPassword, setPassword] = useState("");
  const [myContents, setContents] = useState("");

  const [isCommentEdit, setCommentEdit] = useState(false);

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function onClickShowEdit() {
    setCommentEdit(true);
  }

  async function onClickRegister() {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.number,
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: 1,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.number },
          },
        ],
      });
      alert("댓글을 등록합니다~");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onClickDelete(event) {
    const myPassword = prompt("비밀번호를 입력해 주세요");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
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

  async function onClickEdit(event) {
    if (!myContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!myPassword) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: myContents,
          },
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.number },
          },
        ],
      });
      props.setCommentEdit?.(false);
      alert("댓글을 수정합니다~");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <CommentsUI
      data={data}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
      onClickShowEdit={onClickShowEdit}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      isCommentEdit={isCommentEdit}
      // el={props.el}
    />
  );
}
