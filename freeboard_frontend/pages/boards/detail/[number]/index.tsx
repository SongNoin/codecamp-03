import Detail from "../../../../src/components/units/board/Detail/Detail.container";
import CommentsWrite from "../../../../src/components/units/board/comments-write/comments-write.container";
import CommentsList from "../../../../src/components/units/board/comments-list/comments-list.container";

export default function DetailPage() {
  return (
    <>
      <Detail />
      <CommentsWrite />
      <CommentsList />
    </>
  );
}
