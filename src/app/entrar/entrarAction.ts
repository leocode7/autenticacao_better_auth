import { authClient } from "@/lib/auth-client"

export const entrarAction = async (formData: FormData) => {
  const { data, error } = await authClient.emailOtp.sendVerificationOtp({
    email: formData.get("email") as string,
    type: "sign-in", // required
  });
  if (error) {
    console.log(`Erro: ${error}`);
  }
  console.log(data)
}
