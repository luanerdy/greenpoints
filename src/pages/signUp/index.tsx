import { Input } from "../../components/input";
import logo from "../../assets/imgs/logoText.png";
import close from "../../assets/imgs/Close.png";
import {
  SignUpField,
  Header,
  Hr,
  Field,
  MainContent,
  Checkbox,
} from "./styles";
import { Btn } from "../../components/btn";
import { FormEvent, useLayoutEffect, useState } from "react";
import { signupIndivudual } from "../../services/individualsApi";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleContinue = (e: MouseEvent) => {
    e.preventDefault();
    if(fields.cpf.length === 14 && fields.name.length > 0)
      setStep(2);
  };

  const adjustCpf = (cpf: string) => {
    const len = cpf.length;
    const digit = cpf[len - 1];

    if((len === 4 || len === 8) && digit !== '.') {
      return `${cpf.slice(0, len - 1)}.${digit}`;
    }

    if(len === 12 && digit !== '-') {
      return `${cpf.slice(0, len - 1)}-${digit}`;
    }

    return cpf;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signupIndivudual(fields);
    navigate('/');
  };

  const handleInputChange = (name: string, value: string) => {
    if(name === 'cpf') value = adjustCpf(value);

    setFields({
      ...fields,
      [name]: value,
    });
  };

  return (
    <>
      <SignUpField autoComplete="off" onSubmit={handleSubmit}>
        <Header>
          <img src={logo} alt="Logo" />
          <img src={close} alt="Close Button" />
        </Header>

        <MainContent>
          <Hr id="row" />
          <h1>Crie sua conta.</h1>
          <h1>Ajude e ganhe.</h1>

          {
            {
              1: (
                <fieldset>
                  <Field>
                    <h2>Nome completo</h2>
                    <Input
                      value={fields.name}
                      name="name"
                      onChange={(e: any) =>
                        handleInputChange(e.target.name, e.target.value)
                      }
                      type="text"
                      placeholder="Digite seu nome completo"
                      autocomplete="off"
                    />
                  </Field>

                  <Field>
                    <h2>CPF</h2>
                    <Input
                      value={fields.cpf}
                      name="cpf"
                      onChange={(e: any) =>
                        handleInputChange(e.target.name, e.target.value)
                      }
                      type="text"
                      placeholder="Digite seu CPF"
                      autocomplete="off"
                      maxLength={14}
                      minLength={14}
                    />
                  </Field>
                </fieldset>
              ),
              2: (
                <fieldset>
                  <Field>
                    <h2>Email de cadastro</h2>
                    <Input
                      value={fields.email}
                      name="email"
                      onChange={(e: any) =>
                        handleInputChange(e.target.name, e.target.value)
                      }
                      type="email"
                      placeholder="Digite seu email"
                    />
                  </Field>

                  <Field>
                    <h2>Senha</h2>
                    <Input
                      value={fields.password}
                      name="password"
                      onChange={(e: any) =>
                        handleInputChange(e.target.name, e.target.value)
                      }
                      type="password"
                      placeholder="Digite sua senha"
                      minLength={6}
                    />
                  </Field>

                  <Checkbox>
                    <input type="checkbox" required />
                    <h2>Aceito os Termos de Uso e Política de Privacidade.</h2>
                  </Checkbox>
                </fieldset>
              ),
            }[step]
          }
        </MainContent>

        {
          {
            1: <Btn text="Continuar" type="button" onClick={handleContinue} />,
            2: <Btn text="Cadastrar" type="submit" />,
          }[step]
        }
      </SignUpField>
    </>
  );
};
