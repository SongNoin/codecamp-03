import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  height: 800px;
  background-color: pink;
`;

export const CareselWrapper = styled.div``;

export const CardImg = styled.img`
  width: 100%;
  height: 700px;
`;

export const Caresel = styled(Slider)`
  .slick-list {
    width: 1600px;
    margin: 0 auto;
  }
  .slick-slide div {
    /* cursor: pointer; */
  }
  .slick-dots {
    bottom: -10px;
    margin-top: 200px;
  }
  .slick-track {
    /* overflow-x: hidden; */
  }
`;
