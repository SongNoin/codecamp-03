import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketPage(props) {
  //* 2번째실행

  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <div>마켓페이지입니다.</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  # 1번째실행

  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  //* 1번째실행
  // 페이지 안에만 적을수 있다.  getServerSideProps는 정해진 이름이라 바꾸면 안된다.
  // 1. graphql 데이터를 요청한다.
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  // 2. 요청받은 데이터를 페이지로 넘겨준다.
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
