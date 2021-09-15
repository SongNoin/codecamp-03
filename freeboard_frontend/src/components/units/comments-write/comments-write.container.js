import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsWriteUI from "./comments-write.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./comments-write.queries";
import { FETCH_BOARD_COMMENTS } from "../comments-list/comments-list.queries";

const desc = [1, 2, 3, 4, 5];

export default function CommentsWrite(props) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [myWriter, setWriter] = useState("");
  const [myPassword, setPassword] = useState("");
  const [myContents, setContents] = useState("");

  const [myRate, setMyRate] = useState(3);
  const handleChange = (value) => {
    setMyRate(value);
    alert(value + "점");
  };

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
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
            rating: myRate,
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
      props.setIsCommentEdit?.(false);
      alert("댓글을 수정합니다~");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <CommentsWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
      isCommentEdit={props.isCommentEdit}
      onClickEdit={onClickEdit}
      el={props.el}
      handleChange={handleChange}
    />
  );
}
