import { useQuery } from "@apollo/client";
import ListUI from "./List.presenter";
import { FETCH_BOARDS } from "./List.queries";

export default function List() {
  const { data } = useQuery(FETCH_BOARDS);

  return <ListUI data={data} />;
}
