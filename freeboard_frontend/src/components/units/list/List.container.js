import { useQuery } from "@apollo/client";
import ListUI from "./List.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./List.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function List(props) {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const router = useRouter();

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const [current, setCurrent] = useState(1);

  function onClickWrite() {
    router.push(`/boards/new/`);
  }

  function onClickDetail(event) {
    router.push(`/boards/detail/${event.currentTarget.id}`);
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurrent(startPage - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setCurrent(startPage + 10);
  }

  function onClickPage(event) {
    refetch({
      page: Number(event.target.id),
    });
    // setIsAct(true);
    setCurrent(Number(event.target.id));
  }

  return (
    <ListUI
      data={data}
      onClickWrite={onClickWrite}
      onClickDetail={onClickDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
    />
  );
}
