import { useNavigate, Link } from "react-router-dom";
import { useForm } from "../../components/useForm";
import LOGO1 from "../../assets/images/LOGO1.svg";
import {
  MainContainer,
  LogoContainer,
  BlockContainer,
  ActionText,
  FormContainer,
  Form,
  Text,
  SubmitButton,
} from "../../assets/styles/FormStyle";
import { toast } from "react-toastify";
import axios from "axios";
import { InfoContext } from "../../contexts/InfoContext";
import { useContext } from "react";

export default function LoginPage() {
  const [form, handleForm] = useForm({
    email: "",
    password: "",
  });

  const { setUser, user } = useContext(InfoContext);

  const navigate = useNavigate();

  async function registration(event) {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/`, form)
      .then((response) => {
        setUser(response.data);
        toast("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        toast("Não foi possível fazer o login!");
      });
  }

  return (
    <MainContainer>
      <LogoContainer>
        <img src={LOGO1} alt="EasyLaw logo" />
      </LogoContainer>
      <BlockContainer>
        <ActionText>Login</ActionText>
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
            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
          <Link to="/register">
            <Text>
              <h3>Não possui uma conta? Cadastre-se!</h3>
            </Text>
          </Link>
        </FormContainer>
      </BlockContainer>
    </MainContainer>
  );
}
