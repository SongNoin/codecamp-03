import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function RecentWatchBox() {
  const [basketItems, setBasketItmes] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItmes(items);
  }, []);

  const MyBox = styled.div`
    width: 196px;
    position: sticky;
    bottom: 50px;
    left: 3000px;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  `;
  const Title = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    margin-top: 20px;
  `;
  const RecentBox = styled.div`
    width: 156px;
    height: 199px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);

    :hover {
      background-color: #81d8b1;
    }
    cursor: pointer;
    margin-bottom: 20px;
  `;
  const LikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  `;
  const Heart = styled.img`
    width: 15px;
    height: 14px;
    margin-right: 5px;
  `;
  const LikeCount = styled.div`
    margin-right: 10px;
  `;

  const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Photo = styled.div`
    width: 60px;
    height: 60px;
    background-color: gray;
  `;
  const Name = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
    margin-left: 10px;
  `;
  const Subname = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    margin-left: 10px;
  `;
  const Price = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
    margin-left: 10px;
  `;
  const Tag = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    margin-top: 8px;
    margin-left: 10px;
  `;
  return (
    <MyBox>
      <Title>오늘 본 상품</Title>
      {basketItems?.map((el: any) => (
        <RecentBox key={el._id}>
          <LikeWrapper>
            <Heart src="/images/heart.png" />
            <LikeCount>{el.pickedCount}</LikeCount>
          </LikeWrapper>
          <ProductWrapper>
            <Photo></Photo>
          </ProductWrapper>
          <Name>{el.name}</Name>
          <Subname>{el.remarks}</Subname>
          <Price>{el.price}</Price>
          <Tag>{el.tags}</Tag>
        </RecentBox>
      ))}
    </MyBox>
  );
}
