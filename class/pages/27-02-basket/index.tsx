import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickBasket = (el) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];

    // ["철수","영희","훈이"].map ((el) => el + "어린이") // 철수어린이 , 영희어린이, 훈이어린이

    let isExists = false; // 껐다 켰다 할수 잇는 변수를 스위치 변수라고 한다.
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다!");
      return;
    }
    // 체크 !! (이미 담았는지 체크 !)

    const newEl = { ...el }; // 얕은복사 (원본은 지울수 없기에 새로 선언해준다.)
    delete newEl.__typename; // 가져오고 싶지 않은 내용 지워주기
    baskets.push(newEl);

    console.log("담기 : ", el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    // 문자열로 바꾸고 들어가야 object 로 안들어간다. // baskets 값이 같으니 덮어씌워져진다.
  };

  function onClickLogin() {
    alert("로그인에 성공했습니다.");
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    if (baskets.length) {
      const result = confirm(
        "장바구니에 담으신 상품입니다. 장바구니 페이지로 이동할까요?"
      );
      if (result) router.push("27-03-basket-logged-in");
    }
  }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id} id={String(el)}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
