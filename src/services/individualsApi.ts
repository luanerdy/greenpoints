import axios from "axios";
import { SignupIndividualPayload } from "../@types/payloadsTypes";

export const signupIndivudual = async (payload: SignupIndividualPayload) => {
  const data = {
    individual_name: payload.name,
    individual_cpf: payload.cpf,
    individual_email: payload.email,
    individual_password: payload.password,
  }
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/individuals/register`, data);
  return response.data;
};
