export default function ProductUI(props) {
  return (
    <>
      {/* <div> OO페이지 </div> */}
      <div>{props.isUpdate ? "수정페이지" : "등록페이지"}</div>
      판매자 : <input type="text" onChange={props.onChangeMySeller} />
      상품이름 : <input type="text" onChange={props.onChangeMyName} />
      상세정보 : <input type="text" onChange={props.onChangeMyDetail} />
      상품가격 : <input type="text" onChange={props.onChangeMyPrice} />
      {!props.isUpdate && (
        <button onClick={props.onClickSubmit}>등록하기</button>
      )}
      {props.isUpdate && (
        <button onClick={props.onClickUpdate}>수정하기</button>
      )}
    </> //  {props.isEdit ? "수정하기" :"등록하기" } 조건부 랜더링도 된다.
  );
}
