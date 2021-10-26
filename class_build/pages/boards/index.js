import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나의사이트 게시판페이지" />
        <meta property="og:description" content="환영합니다!!" />
        <meta
          property="og:image"
          content="https://w.namu.la/s/bc75175b063a43a123523fba625ed9d185f6a180a3c1e9ae9409db0c110266e4f69e7aa434253687819b7dd5b36cccf4bd508977f6f76e3b9353db545d75168ba5c1fde8b3327cb27431716d9f89b84b1d8945e6fc9eb60ceb418432323cd459"
        />
      </Head>
      <div>게시판입니다</div>;
    </>
  );
}
