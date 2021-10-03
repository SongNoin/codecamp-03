import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  height: 715px;
  width: 1920px;
  /* background-color: yellowgreen; */
`;

export const CareselWrapper = styled.div``;

export const CardImg = styled.img`
  width: 100%;
  width: 100%;
`;

export const Caresel = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 0 auto;
  }
  .slick-slide div {
    /* cursor: pointer; */
  }
  .slick-dots {
    margin-top: 200px;
  }
  .slick-track {
    /* overflow-x: hidden; */
  }
`;