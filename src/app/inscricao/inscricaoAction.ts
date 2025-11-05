import { signUp } from "@/lib/auth-client"
import { redirect } from "next/navigation";

export const inscricaoAction = async (_prevSatet: any, formData: FormData) => {
  const res = await signUp.email({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (res.error) {
    return {success: false, message: "Ops, algo ocorreu errado na inscrição. Tente novamente!"}
  } else {
    redirect("dashboard");
  }

}