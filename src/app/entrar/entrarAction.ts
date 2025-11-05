import { signIn } from "@/lib/auth-client"
import { redirect } from "next/navigation";

export const entrarAction = async (_prevState: any, formData: FormData) => {
  const res = await signIn.email({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (res.error) {
    return { success: false, message: "Dados de login incorretos" }
  } else {
    redirect("dashboard");
  }
}
