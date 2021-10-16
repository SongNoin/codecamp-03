import styled from "@emotion/styled";

const MyButton = styled.button`
  width: 91px;
  height: 52px;
  background-image: linear-gradient(
    to right,
    #e0eafc 0%,
    #35c584 90%,
    #35c584 100%
  ); /* padding: 15px 45px; */
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  display: block;
  border: none;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

export default function SmallCommonButton(props) {
  return (
    <MyButton onClick={props.onClick} id={props.id}>
      {props.name}
    </MyButton>
  );
}
