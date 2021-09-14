import CommentsListUIItem from "./comments-list.presenterItem";

export default function CommnetsListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentsListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}
