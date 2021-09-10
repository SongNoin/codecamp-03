import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentsUI from "./comments.presenter";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./comments.queries";
export default function Comments() {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [myWriter, setWriter] = useState("");
  const [myPassword, setPassword] = useState("");
  const [myContents, setContents] = useState("");

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
      const result = await createBoardComment({
        variables: {
          boardId: router.query.number,
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: 1,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.number },
        //   },
        // ],
      });
      alert("댓글을 등록합니다~");
      //   router.push(`boards/detail/${result.data.createBoardComment._id}`);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <CommentsUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
    />
  );
}
