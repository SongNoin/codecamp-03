import { useQuery } from "@apollo/client";
import MyMarketUI from "./mymarket.presenter";
import { FETCH_USEDITEM_ISOLD } from "./mymarket.queries";

export default function MyMarket() {
  const { data } = useQuery(FETCH_USEDITEM_ISOLD, {
    variables: { page: 1 },
  });
  return <MyMarketUI data={data} />;
}
