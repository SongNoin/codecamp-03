import SideQuizBoardReadUI from "./SideQuizBoardRead.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./SideQuizBoardRead.queries";

export default function SideQuizBoardRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return <SideQuizBoardReadUI data={data} router={router} />;
}
