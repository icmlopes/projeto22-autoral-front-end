import styled from "styled-components";
import LOGO2 from "../assets/images/LOGO2.svg";
import logo2 from "../assets/images/logo2.svg";
import { IoMdMenu, IoIosLogOut } from "react-icons/io";

export default function NavBar() {
  return (
    <MainContainer>
      <SecondContainer>
        <IoMdMenu />
        <LogoContainer>
          <img src={logo2} alt="EasyLaw Logo" />
        </LogoContainer>
        <IoIosLogOut />
      </SecondContainer>
    </MainContainer>
  );
}

export const MainContainer = styled.div`
  position: absolute;
  background-color: #18305d;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SecondContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  color: #fffcf7;
  @media (max-width: 375px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  img {
    object-fit: border-box;
    width: 350px;
  }

  @media (max-width: 768px) {
    img {
      width: 280px;
    }
  }
  @media (max-width: 375px) {
    img {
      width: 220px;
    }
  }
`;
