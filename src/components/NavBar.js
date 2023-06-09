import styled from "styled-components";
import LOGO2 from "../assets/images/LOGO2.svg";
import EASYLAW from "../assets/images/EASYLAW.svg";

export default function NavBar() {
  return (
    <MainContainer>
      <h1>TESTEEEEEEEE</h1>
      <LogoContainer>
        <img src={EASYLAW} alt="EasyLaw Logo" />
      </LogoContainer>
    </MainContainer>
  );
}

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: pink;
  width: 100%;
  height: 60px;
`;

export const LogoContainer = styled.div`
  background-color: yellow;
  img {
    object-fit: border-box;
    width: 250px;
    height: 100px;
  }
`;
