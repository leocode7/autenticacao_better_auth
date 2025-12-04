import { authClient } from "@/lib/auth-client"
import { FormState } from "./page";

export const enviarVerificacaoOtop = async (_prevState: FormState, formData: FormData) => {
  const { data, error } = await authClient.emailOtp.sendVerificationOtp({
    email: formData.get("email") as string,
    type: "sign-in", // required
  });
  if (error) {
    console.log(`Erro: ${error}`);
    return { success: false, otp: false, email: `${formData.get("email")}`, message: 'Ops! Algo ocorreu errado. Tente novamente' }
  }
  console.log(data)
  return { success: true, otp: true, email: `${formData.get("email")}`, message: 'Código de login enviado para o email! Insira o abaixo para login' }
}
