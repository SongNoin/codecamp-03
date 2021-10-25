import { useState } from "react";

import { useQuery } from "@apollo/client";
import ListUI from "./List.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_OF_THE_BEST,
} from "./List.queries";
import { useRouter } from "next/router";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function List() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const router = useRouter();

  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const { data: dataBoardsOfTheBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const [current, setCurrent] = useState(1);
  // const [mySearch, setMySearch] = useState("");
  const [myKeyword, setMyKeyword] = useState("");

  const getDebounce = _.debounce((data: any) => {
    refetch({ search: data, page: 1 });
    setMyKeyword(data);
    setCurrent(1);
  }, 500);

  function onChangeSearch(event) {
    getDebounce(event.target.value);
  }

  function onClickSearch(event) {
    refetch({ search: myKeyword, page: Number(event.target.id) });
  }

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

  function onClickBest(event) {
    router.push(`/boards/detail/${event.currentTarget.id}`);
  }

  return (
    <ListUI
      data={data}
      dataBoardsOfTheBest={dataBoardsOfTheBest}
      onClickWrite={onClickWrite}
      onClickDetail={onClickDetail}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      onClickBest={onClickBest}
      startPage={startPage}
      lastPage={lastPage}
      current={current}
    />
  );
}
