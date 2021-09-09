import { useQuery } from "@apollo/client";
import ListUI from "./List.presenter";
import { FETCH_BOARDS } from "./List.queries";
import { useRouter } from "next/router";

export default function List() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  function onClickWrite() {
    router.push(`/boards/new/`);
  }

  function onClickDetail(event) {
    router.push(`/boards/detail/${event.target.id}`);
  }

  return (
    <ListUI
      data={data}
      onClickWrite={onClickWrite}
      onClickDetail={onClickDetail}
    />
  );
}
