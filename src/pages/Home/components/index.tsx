import styled from "styled-components";
interface ThemeWrap {
  bg?: string;
  bgImg?: string;
  color?: string;
  [key: string]: any;
}
export const ContentWholeWrap = styled.div`
  font-family: PingFangSC-Medium, PingFang SC;
  background-color: ${({ bg }: ThemeWrap) => (bg ? bg : "#ffffff")};
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : "")};
  background-size: 100% 100%;
  width: 100%;
`;

export const ContentWarp = styled.div`
  width: 1200px;
  margin: auto;
  p,
  h2,
  ul,
  li {
    padding: 0;
    margin: 0;
  }
`;

export const StyledLink = styled.a`
text-decoration: none;
cursor: pointer;
/* font-weight: 500; */

:hover {
  text-decoration: none;
}

:focus {
  outline: none;
  text-decoration: none;
}

:active {
  text-decoration: none;
}
`;