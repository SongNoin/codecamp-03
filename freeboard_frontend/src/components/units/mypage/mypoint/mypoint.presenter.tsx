import {
  Wrapper,
  MenuWrapper,
  Total,
  Charge,
  Buy,
  Sell,
} from "./mypoint.styles";
import MyBuyPointPage from "./mypointmenu/mybuypoint";
import MyChargePointPage from "./mypointmenu/mychargepoint";
import MySellPointPage from "./mypointmenu/mysellpoint";
import MyTotalPointPage from "./mypointmenu/mytotalpoint";

export default function MyPointUI(props) {
  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <Total total={props.total} onClick={props.onClickMoveToTotal}>
            전체내역
          </Total>
          <Charge charge={props.charge} onClick={props.onClickMoveToCharge}>
            충전내역
          </Charge>
          <Buy buy={props.buy} onClick={props.onClickMoveToBuy}>
            구매내역
          </Buy>
          <Sell sell={props.sell} onClick={props.onClickMoveToSell}>
            판매내역
          </Sell>
        </MenuWrapper>
        {props.total && <MyTotalPointPage />}
        {props.charge && <MyChargePointPage />}
        {props.buy && <MyBuyPointPage />}
        {props.sell && <MySellPointPage />}
      </Wrapper>
    </>
  );
}
