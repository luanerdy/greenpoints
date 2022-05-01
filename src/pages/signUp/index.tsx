import { Input } from "../../components/input";

import {
  SignUpField,
  Header,
  Hr,
  Field,
  MainContent,
  Checkbox,
} from "./styles";
import { Btn } from "../../components/btn";

export const SignUp = () => {
  return (
    <>
      <SignUpField>
        <Header>
          <h3>sadijasdiamsd</h3>
          <h3>asdasdasdasdasd</h3>
        </Header>

        <MainContent>
          <Hr id="row" />
          <h1>Crie sua conta.</h1>
          <h1>Ajude e ganhe.</h1>

          <Field>
            <h2>Email</h2>
            <Input text="Email" type="email" />
          </Field>

          <Field>
            <h2>Senha</h2>
            <Input text="Senha" type="password" />
          </Field>

          <Checkbox>
            <input type="checkbox" />
            <h2>Aceito os Termos de Uso e Política de Privacidade.</h2>
          </Checkbox>
        </MainContent>

        <Btn text="Cadastrar" />
      </SignUpField>
    </>
  );
};
