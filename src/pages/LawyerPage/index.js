import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { useForm } from "../../components/useForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "../../contexts/InfoContext";
import axios from "axios";

export default function LawyerPage() {
  const [form, handleForm] = useForm({
    name: "",
    oab: "",
    state: "",
  });

  const { setUser, token, user } = useContext(InfoContext);

  const navigate = useNavigate();

  async function registration(event) {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/lawyer`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response);
        toast("Informações cadastradas com sucesso!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.response.data);
        toast("Não foi possível fazer o cadastro!");
      });
  }

  return (
    <MainContainer>
      <NavBar />
      <ContendContainer>
        <BlockContainer>
          <ActionText>Cadastro Advogado(a)</ActionText>
          <FormContainer>
            <Form onSubmit={registration}>
              <p>Nome</p>
              <input
                type="text"
                required
                placeholder="José Luiz da Silveira"
                name="name"
                value={form.name}
                onChange={handleForm}
              />
              <p>OAB</p>
              <input type="text" required placeholder="000000" name="oab" value={form.oab} onChange={handleForm} />
              <p>Estado</p>
              <input
                type="text"
                required
                placeholder="Minas Gerais"
                name="state"
                value={form.state}
                onChange={handleForm}
              />
              <SubmitButton type="submit">Salvar</SubmitButton>
            </Form>
          </FormContainer>
        </BlockContainer>
      </ContendContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const ContendContainer = styled.div`
  /* background-color: #112242; */
  background-color: #1b3669;
  /* background-color: #2c57a8; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Text = styled.div`
//   color: #fffcf7;
//   font-size: 50px;
// `;

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
  align-items: center;
  text-align: flex-start;
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
    height: 40px;
    background: rgba(255, 255, 255, 0.47);
    border: 2px solid #fffcf7;
    border-radius: 10px;
    font-size: 20px;
    /* padding-left: 10px; */
  }
  input:focus {
    outline: none;
    background-color: #fffcf7;
  }
  @media (max-width: 768px) {
    p {
      font-size: 25px;
    }
    input {
      width: 348px;
      height: 40px;
      font-size: 17px;
    }
  }
  @media (max-width: 375px) {
    p {
      font-size: 20px;
    }
    input {
      width: 310px;
      height: 35px;
      font-size: 13px;
    }
  }
`;
export const SubmitButton = styled.button`
  width: 230px;
  height: 50px;
  background-color: #08449b;
  color: #fffcf7;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 174px;
    height: 40px;
    font-size: 20px;
  }
  @media (max-width: 375px) {
    width: 130px;
    height: 40px;
    font-size: 15px;
  }
`;

export const UserTypeContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const UserTypeButton = styled.button`
  background-color: #28519c;
  opacity: ${(props) => (props.isSelected ? "0.6" : "none")};
  width: 200px;
  height: 50px;
  margin: 0px 30px 00px 30px;
  border-radius: 10px;
  font-size: 20px;
  color: #fffcf7;
  border: none;
  box-shadow: ${(props) => (props.isSelected ? "0px 0px 5px 1px rgba(255, 255, 255, 0.7)" : "none")};
  @media (max-width: 768px) {
    width: 150px;
    height: 45px;
    font-size: 15px;
  }
  @media (max-width: 375px) {
    width: 130px;
    height: 45px;
    font-size: 15px;
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
