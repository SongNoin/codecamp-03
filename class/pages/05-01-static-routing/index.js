import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  function onClickMove() {
    router.push("/05-02-static-routed"); //yarn 주소 원리랑 똑같다 // page 이동됨
  }

  return (
    <>
      <button onClick={onClickMove}>정적 라우팅 페이지 이동!!!</button>
    </>
  );
}
