import MarketCommentsList from "../../../../src/components/units/market/market-comments-list/market-comments-list.container";
import MarketCommentsWrite from "../../../../src/components/units/market/market-comments-write/market-comments-write.container";
import MarketDetail from "../../../../src/components/units/market/market-detail/market-detail.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <MarketCommentsWrite />
      <MarketCommentsList />
    </>
  );
}
