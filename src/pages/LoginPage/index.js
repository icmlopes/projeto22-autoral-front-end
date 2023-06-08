import { useNavigate } from "react-router-dom";
import { useForm } from "../../components/useForm";
import LOGO1 from "../../assets/images/LOGO1.svg";
import {
  MainContainer,
  LogoContainer,
  BlockContainer,
  ActionText,
  FormContainer,
  Form,
  // ConfirmButton,
  Text,
} from "../../assets/styles/FormStyle";

export default function LoginPage() {
  const [form, handleForm] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: ",",
  });

  const navigate = useNavigate();
  return (
    <MainContainer>
      <LogoContainer>
        <img src={LOGO1} alt="EasyLaw logo" />
      </LogoContainer>
      <BlockContainer>
        <ActionText>Login</ActionText>
        <FormContainer>
          <Form>
            <p>Email</p>
            <input type="text" placeholder="Email" name="email" value={form.email} onChange={handleForm} />
            <p>Senha</p>
            <input type="text" placeholder="Senha" name="password" value={form.password} onChange={handleForm} />
            <button>Login</button>
          </Form>
          <Text>
            <h3>Não possui uma conta? Cadastre-se!</h3>
          </Text>
        </FormContainer>
      </BlockContainer>
    </MainContainer>
  );
}
