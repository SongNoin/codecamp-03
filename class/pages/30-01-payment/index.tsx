import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentPage() {
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp49910675
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 회사마다 주문번호 만드는 규칙이 있음
        name: "32인치 모니터",
        amount: 100,
        buyer_email: "as5427072@gmail.com",
        buyer_name: "송경환",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 금천구 시흥대로",
        buyer_postcode: "08608",
      },
      function (rsp: any) {
        // callback
        if (rsp.success) {
          console.log(rsp); // rsp안에 결제 정보가 다 담겨져있다.
          // 이것을 이용해 백엔드에 넣어주면 이용자의 결제내역을 확인할 수 도있고
          // 포인트제도 등 을 적용할 수 있다.

          // mutation () => createPointTransactionOfLoading
          // ...,
          // 결제 성공 시 로직,
          // ...
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
        }
      }
    );
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액 : <input type="text" />
      <br />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
