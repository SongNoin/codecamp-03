import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";
import { Wrapper, Title, PointAmount, Input } from "./point.styels";
export default function PointUI(props) {
  return (
    <>
      <Wrapper>
        <Title>포인트충전</Title>
        <PointAmount>
          {props.data?.fetchUserLoggedIn.userPoint?.amount} 송 보유중!
        </PointAmount>
        <Input onChange={props.onChangeMyPoint} />
        <SmallCommonButton name="충전하기" onClick={props.onClickPayment} />
      </Wrapper>
    </>
  );
}
