import MarketAnswerListItemUI from "./market-answer-list-presenteritem";
import InfiniteScroll from "react-infinite-scroller";

export default function MarketAnswerListUI(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestionAnswers.map((answerel) => (
        <MarketAnswerListItemUI
          key={answerel._id}
          answerel={answerel}
          onClickDeleteAnswer={props.onClickDeleteAnswer}
        />
      ))}
    </InfiniteScroll>
  );
}
