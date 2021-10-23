import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";
import { Wrapper, Title, PointAmount, Input } from "./point.styels";
export default function PointUI(props) {
  return (
    <>
      <Wrapper>
        <Title>포인트충전</Title>
        <PointAmount>
          {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString(
            "ko-KR"
          )}{" "}
          송 보유중!
        </PointAmount>
        <Input
          onChange={props.onChangeMyPoint}
          placeholder="충천할 금액을 입력해주세요!"
        />
        <SmallCommonButton name="충전하기" onClick={props.onClickPayment} />
      </Wrapper>
    </>
  );
}
