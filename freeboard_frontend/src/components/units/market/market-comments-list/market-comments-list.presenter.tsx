import MarketCommentListItemUI from "./market-comments-list.presenteritemt";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketCommentsListUI(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <MarketCommentListItemUI
          key={el._id}
          el={el}
          onClickDelete={props.onClickDelete}
        />
      ))}
    </InfiniteScroll>
  );
}
