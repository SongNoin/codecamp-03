import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "LogoFont"; // 폰트이름
    src: url("/fonts/BebasNeue-Regular.ttf"); // 폰트위치
  }
`;
