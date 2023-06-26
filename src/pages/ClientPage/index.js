import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { useForm } from "../../components/useForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "../../contexts/InfoContext";
import axios from "axios";
import React, { useState } from "react";

export default function ClientPage() {
  const { user } = useContext(InfoContext);

  const [form, handleForm] = useForm({
    name: "",
    rg: "",
    cpf: "",
    phone: "",
    birthday: "",
    occupation: "",
    maritalStatus: "",
    nationality: "",
  });

  const [secondForm, setSecondForm] = useState({
    birthPlace: "",
    cep: "",
    street: "",
    city: "",
    state: "",
    number: "",
    neighborhood: "",
    complement: "",
  });

  const navigate = useNavigate();

  async function registration(event) {
    event.preventDefault();

    const combinedForms = {
      ...form,
      ...secondForm,
    };

    console.log(form, secondForm);

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/client`, combinedForms, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        // setUser(response.data);
        console.log(response.data);
        toast("Informações cadastradas com sucesso!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.response.data);
        toast("Não foi possível fazer o cadastro!");
      });
  }

  const handleSecondForm = (event) => {
    const { name, value } = event.target;
    setSecondForm((secondForm) => ({
      ...secondForm,
      [name]: value,
    }));
  };

  return (
    <MainContainer>
      <NavBar />
      <ContendContainer>
        <BlockContainer>
          <ActionText>Cadastro Cliente</ActionText>
          <FormContainer>
            <Block>
              <Form>
                <p>Nome</p>
                <input type="text" required placeholder="Nome" name="name" value={form.name} onChange={handleForm} />
                <p>Carteira de Identidade</p>
                <input
                  type="text"
                  required
                  placeholder="Carteira de Identidade"
                  name="rg"
                  value={form.rg}
                  onChange={handleForm}
                />
                <p>CPF</p>
                <input type="text" required placeholder="CPF" name="cpf" value={form.cpf} onChange={handleForm} />
                <p>Telefone para contato</p>
                <input
                  type="text"
                  required
                  placeholder="Telefone"
                  name="phone"
                  value={form.phone}
                  onChange={handleForm}
                />
                <p>Data de Nascimento</p>
                <input
                  type="text"
                  required
                  placeholder="01-01-1990"
                  name="birthday"
                  value={form.birthday}
                  onChange={handleForm}
                />
                <p>Profissão</p>
                <input
                  type="text"
                  required
                  placeholder="Profissão"
                  name="occupation"
                  value={form.occupation}
                  onChange={handleForm}
                />
                <p>Estado Civil</p>
                <input
                  type="text"
                  required
                  placeholder="Estado Civil"
                  name="maritalStatus"
                  value={form.maritalStatus}
                  onChange={handleForm}
                />
                <p>Nacionalidade</p>
                <input
                  type="text"
                  required
                  placeholder="Nacionalidade"
                  name="nationality"
                  value={form.nationality}
                  onChange={handleForm}
                />
              </Form>
            </Block>
            <Block>
              <Form onSubmit={registration}>
                <p>Naturalidade</p>
                <input
                  type="text"
                  required
                  placeholder="Naturalidade"
                  name="birthPlace"
                  value={secondForm.birthPlace}
                  onChange={handleSecondForm}
                />
                <p>CEP</p>
                <input
                  type="text"
                  required
                  placeholder="cep"
                  name="cep"
                  value={secondForm.cep}
                  onChange={handleSecondForm}
                />
                <p>Logradouro</p>
                <input
                  type="text"
                  required
                  placeholder="Logradouro"
                  name="street"
                  value={secondForm.street}
                  onChange={handleSecondForm}
                />
                <p>Município</p>
                <input
                  type="text"
                  required
                  placeholder="Município"
                  name="city"
                  value={secondForm.city}
                  onChange={handleSecondForm}
                />
                <p>Estado</p>
                <input
                  type="text"
                  required
                  placeholder="Estado"
                  name="state"
                  value={secondForm.state}
                  onChange={handleSecondForm}
                />
                <p>Número</p>
                <input
                  type="text"
                  required
                  placeholder="Número"
                  name="number"
                  value={secondForm.number}
                  onChange={handleSecondForm}
                />
                <p>Bairro</p>
                <input
                  type="text"
                  required
                  placeholder="Bairro"
                  name="neighborhood"
                  value={secondForm.neighborhood}
                  onChange={handleSecondForm}
                />
                <p>Complemento</p>
                <input
                  type="text"
                  required
                  placeholder="Complemento"
                  name="complement"
                  value={secondForm.complement}
                  onChange={handleSecondForm}
                />
                <SubmitButton type="submit">Salvar</SubmitButton>
              </Form>
            </Block>
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
  @media (max-width: 1280px) {
    height: 100%;
  }
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
  height: auto;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const FormContainer = styled.div`
  width: auto;
  display: flex;
  /* flex-direction: column; */
  /* gap: 1000px; */
  /* align-items: center; */
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    /* align-items: center; */
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
  margin-top: 100px;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 43px;
  color: #fffcf7;
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 90px;
    font-size: 36px;
    margin-bottom: 20px;
  }
  @media (max-width: 375px) {
    margin-top: 80px;
    font-size: 30px;
    margin-bottom: 20px;
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

const Block = styled.div`
  /* Add any additional styles for the form blocks */
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 768px) {
    align-items: center;
  }
  /* align-items: center; */
  /* justify-content: center; */
`;
