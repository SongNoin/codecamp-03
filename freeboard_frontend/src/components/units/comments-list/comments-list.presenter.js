import CommentsListUIItem from "./comments-list.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function CommnetsListUI(props) {
  return (
    <div>
      <>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true || false}
        >
          {props.data?.fetchBoardComments.map((el) => (
            <CommentsListUIItem key={el._id} el={el} />
          ))}
        </InfiniteScroll>
      </>
    </div>
  );
}
