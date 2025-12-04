import { authClient } from "@/lib/auth-client";
import { email } from "better-auth";
import { redirect } from "next/navigation";

export const entrarComOtop = async (formData: FormData) => {
  const {data, error} = await authClient.signIn.emailOtp({
    email: formData.get("email") as string,
    otp: formData.get("codigoOtp") as string
  });
  if (error) {
    console.log(`Erro: ${error}`);
  }
  console.log('Login efetuado');
  redirect('dashboard');
}