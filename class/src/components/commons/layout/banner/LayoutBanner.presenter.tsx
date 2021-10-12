import {
  Wrapper,
  CareselWrapper,
  Caresel,
  CardImg,
} from "./LayoutBanner.styles";

export default function BannerUI(props) {
  return (
    <Wrapper>
      <CareselWrapper>
        <h2> Single Item</h2>
        <Caresel {...props.settings}>
          <div>
            <div>
              <CardImg src="/images/jungah.png" />
            </div>
          </div>
          <div>
            <div>
              <CardImg src="/images/아이유2.jpg" />
            </div>
          </div>
          <div>
            <div>
              <CardImg src="/images/jungah.png" />
            </div>
          </div>
          <div>
            <div>
              <CardImg src="/images/map.png" />
            </div>
          </div>
          <div>
            <div>
              <CardImg src="/images/home.png" />
            </div>
          </div>
        </Caresel>
      </CareselWrapper>
    </Wrapper>
  );
}
