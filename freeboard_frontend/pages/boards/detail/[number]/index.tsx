import Detail from "../../../../src/components/units/detail/Detail.container";
import CommentsWrite from "../../../../src/components/units/comments-write/comments-write.container";
import CommentsList from "../../../../src/components/units/comments-list/comments-list.container";

export default function DetailPage() {
  return (
    <>
      <Detail />
      <CommentsWrite />
      <CommentsList />
    </>
  );
}
