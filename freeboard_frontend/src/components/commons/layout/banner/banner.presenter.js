import { Wrapper, CareselWrapper, Caresel, CardImg } from "./banner.styles";

export default function BannerUI(props) {
  return (
    <Wrapper>
      <CareselWrapper>
        <Caresel {...props.settings}>
          <div>
            <div>
              <CardImg src="/images/godofwar.png" />
            </div>
          </div>
          <div>
            <div>
              <CardImg src="/images/gran.png" />
            </div>
          </div>
          <div>
            <div>
              <CardImg src="/images/callofduty.png" />
            </div>
          </div>
        </Caresel>
      </CareselWrapper>
    </Wrapper>
  );
}
