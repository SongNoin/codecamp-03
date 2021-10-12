import { useEffect, useState } from "react";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItmes] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItmes(items);
  }, []);
  return (
    <>
      <div>비회원으로 담는 장바구니</div>
      {basketItems.map((el, index) => (
        <div key={el._id}>
          <span style={{ marginRight: "10px" }}>{index}</span>
          <span style={{ marginRight: "10px" }}>{el.writer}</span>
          <span style={{ marginRight: "10px" }}>{el.title}</span>
        </div>
      ))}
    </>
  );
}
