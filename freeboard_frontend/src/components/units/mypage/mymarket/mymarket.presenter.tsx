import SmallCommonButton from "../../../commons/buttons/04/SmallCommonButton";
import {
  Wrapper,
  WrapperHeader,
  Menu,
  Row,
  Column,
  MenuWrapper,
  SearchWrapper,
  SearchInput,
  WrapperBody,
} from "./mymarket.styles";

export default function MyMarketUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <MenuWrapper>
            <Menu>나의 상품</Menu>
            <Menu>마이찜</Menu>
          </MenuWrapper>
          <SearchWrapper>
            <SearchInput />
            <SmallCommonButton name="검색" />
          </SearchWrapper>
        </WrapperHeader>
        <WrapperBody>
          {props.data?.fetchUseditemsISold.map((el, index) => (
            <Row key={el._id}>
              <Column>{10 - index}</Column>
              <Column>{el.name}</Column>
              <Column>{el.price}</Column>
            </Row>
          ))}
        </WrapperBody>
      </Wrapper>
    </>
  );
}
