import { Wrapper, CarImage } from "./games.styles";

export default function GamesUI(props) {
  return (
    <>
      <Wrapper>
        <div>Forza Horizon 4</div>
        <CarImage src={props.carImage} />
      </Wrapper>
    </>
  );
}
