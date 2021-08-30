import {
  Wrapper,
  Wrapper__header,
  Status,
  Search,
  Warpper__body,
  Body__header,
  MyProfile,
  My,
  Profile,
  Name,
  Select,
  Select__name,
  Select__FAQ,
  Line,
  Body__footer,
  Question,
  Question__content,
  Question__numeber,
  Question__sentence,
  Wrapper__footer,
  Footer__menu,
  Menu__wrapper,
  Menu__photo,
  Menu__name,
  Menu__my,
} from "../../../styles/faq";

export default function faqPage() {
  return (
    <Wrapper>
      <Wrapper__header>
        <Status></Status>
        <Search>
          <img src="/images/faq.png" />
        </Search>
      </Wrapper__header>
      <Warpper__body>
        <Body__header>
          <MyProfile>
            <My>마이</My>
            <Profile>
              <img src="/images/jungah.png" />
              <Name>임정아</Name>
              <img src="/images/arrow.png" />
            </Profile>
          </MyProfile>
          <Select>
            <Select__name>공지사항</Select__name>
            <Select__name>이벤트</Select__name>
            <Select__FAQ>FAQ</Select__FAQ>
            <Select__name>Q&A</Select__name>
          </Select>
        </Body__header>
        <Line></Line>
        <Body__footer>
          <Question>
            <Question__content>
              <Question__numeber>Q.01</Question__numeber>
              <Question__sentence>리뷰작성은 어떻게 하나요?</Question__sentence>
            </Question__content>

            <img src="/images/arrowdown.png" />
          </Question>
          <Question>
            <Question__content>
              <Question__numeber>Q.02</Question__numeber>
              <Question__sentence>
                리뷰 수정/삭제는 어떻게 하나요?
              </Question__sentence>
            </Question__content>
            <img src="/images/arrowdown.png" />
          </Question>
          <Question>
            <Question__content>
              <Question__numeber>Q.03</Question__numeber>
              <Question__sentence>
                아이디/비밀번호를 잊어버렸어요.
              </Question__sentence>
            </Question__content>
            <img src="/images/arrowdown.png" />
          </Question>
          <Question>
            <Question__content>
              <Question__numeber>Q.04</Question__numeber>
              <Question__sentence>회원탈퇴를 하고싶어요.</Question__sentence>
            </Question__content>
            <img src="/images/arrowdown.png" />
          </Question>
          <Question>
            <Question__content>
              <Question__numeber>Q.05</Question__numeber>
              <Question__sentence>
                출발지 설정은 어떻게 하나요?
              </Question__sentence>
            </Question__content>
            <img src="/images/arrowdown.png" />
          </Question>
          <Question>
            <Question__content>
              <Question__numeber>Q.06</Question__numeber>
              <Question__sentence>
                비밀번호를 변경하고 싶어요.
              </Question__sentence>
            </Question__content>
            <img src="/images/arrowdown.png" />
          </Question>
        </Body__footer>
      </Warpper__body>
      <Wrapper__footer>
        <Line></Line>
        <Footer__menu>
          <Menu__wrapper>
            <Menu__photo>
              <img src="/images/home.png" />
            </Menu__photo>
            <Menu__name>홈</Menu__name>
          </Menu__wrapper>
          <Menu__wrapper>
            <Menu__photo>
              <img src="/images/map.png" />
            </Menu__photo>
            <Menu__name>잇츠로드</Menu__name>
          </Menu__wrapper>
          <Menu__wrapper>
            <Menu__photo>
              <img src="/images/heart.png" />
            </Menu__photo>
            <Menu__name>마이찜</Menu__name>
          </Menu__wrapper>
          <Menu__wrapper>
            <Menu__photo>
              <img src="/images/pinkman.png" />
            </Menu__photo>
            <Menu__my>마이</Menu__my>
          </Menu__wrapper>
        </Footer__menu>
      </Wrapper__footer>
    </Wrapper>
  );
}
