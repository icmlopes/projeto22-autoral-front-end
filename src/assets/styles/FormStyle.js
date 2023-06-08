import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #18305d;
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const FormContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 25px;
    color: #fffcf7;
    margin-bottom: 10px;
  }
  input {
    margin-bottom: 20px;
    width: 452px;
    height: 71px;
    background: rgba(255, 255, 255, 0.47);
    border: 2px solid #fffcf7;
    border-radius: 10px;
    font-size: 20px;
    padding-left: 10px;
  }
  input:focus {
    outline: none;
    background-color: #fffcf7;
  }
  button {
    width: 452px;
    height: 71px;
    background-color: #08449b;
    color: #fffcf7;
    font-size: 25px;
    border-radius: 10px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 348px;
      height: 47px;
      font-size: 20px;
    }
    @media (max-width: 375px) {
      width: 310px;
      height: 47px;
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 25px;
    }
    input {
      width: 348px;
      height: 47px;
      font-size: 20px;
    }
  }
  @media (max-width: 375px) {
    p {
      font-size: 20px;
    }
    input {
      width: 310px;
      height: 47px;
      font-size: 15px;
    }
  }
`;

export const Text = styled.div`
  margin-top: 30px;
  color: #fffcf7;
  font-size: 20px;
`;

export const ActionText = styled.div`
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 43px;
  color: #fffcf7;
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media (max-width: 375px) {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;
  height: 100vh;
  img {
    width: 590px;
    height: 510;
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    height: auto;
    img {
      padding: 20px;
      width: 350px;
      height: 280px;
    }
  }
  @media (max-width: 375px) {
    img {
      height: 228px;
    }
  }
`;
