import React from "react";

import { Wrapper, CarImage } from "./games.styles";

export default function GamesUI(props) {
  return (
    <>
      <Wrapper>
        <CarImage src={props.carImage} />
      </Wrapper>
    </>
  );
}
