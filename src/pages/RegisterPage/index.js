import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../../components/useForm";
import LOGO1 from "../../assets/images/LOGO1.svg";
import {
  MainContainer,
  LogoContainer,
  BlockContainer,
  ActionText,
  FormContainer,
  UserTypeButton,
  SubmitButton,
  Form,
  Text,
  UserTypeContainer,
} from "../../assets/styles/FormStyle";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

export default function RegisterPage() {
  const [form, handleForm] = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  const [userType, setUserType] = useState("cliente");

  const navigate = useNavigate();

  const handleUserType = (type) => {
    setUserType(type);
    handleForm({ target: { name: "userType", value: type } });
  };

  async function registration(event) {
    event.preventDefault();

    if (userType === "") {
      toast("Selecione um tipo de usuário");
      return;
    }

    const updatedForm = { ...form, userType };

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/register`, updatedForm)
      .then((response) => {
        console.log(response.data);
        toast("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.data.name === "DuplicatedEmailError") {
          toast("Esse e-mail já foi cadastrado, tente fazer login!");
        }

        if (error.response.data.name === "differentPasswordError") {
          toast("As senhas precisam ser iguais!");
        }

        if (error.response.data.name === "InvalidDataError") {
          toast("A senha precisa ter no mínimo 6 caracteres!");
        }
      });
  }
  return (
    <MainContainer>
      <LogoContainer>
        <img src={LOGO1} alt="EasyLaw logo" />
      </LogoContainer>
      <BlockContainer>
        <ActionText>Cadastro</ActionText>
        <FormContainer>
          <Form onSubmit={registration}>
            <p>Email</p>
            <input type="email" required placeholder="Email" name="email" value={form.email} onChange={handleForm} />
            <p>Senha</p>
            <input
              type="password"
              required
              placeholder="Senha"
              name="password"
              value={form.password}
              onChange={handleForm}
            />
            <p>Confirme sua senha</p>
            <input
              type="password"
              required
              placeholder="Senha"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleForm}
            />
            <UserTypeContainer>
              <UserTypeButton
                type="button"
                isSelected={userType === "advogado"}
                onClick={() => handleUserType("advogado")}
              >
                Advogado
              </UserTypeButton>
              <UserTypeButton
                type="button"
                isSelected={userType === "cliente"}
                onClick={() => handleUserType("cliente")}
              >
                Cliente
              </UserTypeButton>
            </UserTypeContainer>

            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </Form>
          <Link to="/">
            <Text>
              <h3>Possui uma conta? Faça login!</h3>
            </Text>
          </Link>
        </FormContainer>
      </BlockContainer>
    </MainContainer>
  );
}
