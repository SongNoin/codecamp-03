import { Wrapper, CareselWrapper, Caresel, CardImg } from "./banner.styles";

export default function BannerUI(props) {
  return (
    <Wrapper>
      <CareselWrapper>
        <Caresel {...props.settings}>
          <div>
            <a href="https://www.ea.com/ko-kr/games/fifa/fifa-22">
              <CardImg src="/images/fifa.png" />
            </a>
          </div>
          <div>
            <a href="https://www.playstation.com/ko-kr/games/death-stranding-directors-cut/">
              <CardImg src="/images/death.png" />
            </a>
          </div>
          <div>
            <a href="https://store.playstation.com/ko-kr/product/HP0177-PPSA03792_00-LOSTJUDGMENT0001/">
              <CardImg src="/images/lost.png" />
            </a>
          </div>
          <div>
            <a>
              <CardImg src="/images/godofwar.png" />
            </a>
          </div>
          <div>
            <a>
              <CardImg src="/images/gran.png" />
            </a>
          </div>
          <div>
            <a>
              <CardImg src="/images/callofduty.png" />
            </a>
          </div>
        </Caresel>
      </CareselWrapper>
    </Wrapper>
  );
}
