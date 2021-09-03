import { useRouter } from "next/router";


export default function DynamicRoutedPage() {
    const router = useRouter()


  return (
    <>
      <div>{router.query.aaa}번 페이지입니다</div> 
      <div>동적페이지이동완료!</div>
    </>
  );
}

// aaa가 몇번인지 가져올수있음
