import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../src/components/units/market-write/market-write.container";

const MarketWritePage = () => {
  return <MarketWrite isEdit={false} />;
};

export default withAuth(MarketWritePage);
