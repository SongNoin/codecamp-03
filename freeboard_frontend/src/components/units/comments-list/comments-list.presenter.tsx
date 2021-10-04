import React from "react";

import CommentsListUIItem from "./comments-list.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function CommnetsListUI(props) {
  if (!props.data?.fetchBoardComments.length) return <></>;
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentsListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
