"use client"

import { useActionState } from "react";
import styles from "./entrar.module.css";
import { enviarVerificacaoOtop } from "./enviarVerificacaoOtop.ts";
import { entrarComOtop } from "./entrarComOtop";

export type FormState = {
  success: boolean;
  otp: boolean;
  email: string;
  message?: string;
}

const initialState: FormState = {
  success: false,
  otp: false,
  email: '',
  message: undefined,
}

const LoginPage = () => {
  const [state, formAction, isPending] = useActionState(enviarVerificacaoOtop, initialState);

  return (

    <div>
      {!state.otp ? (
        <div className={styles.containerPrincipal}>
          <h1>Página de Login</h1>
          <form action={formAction}>
            <input
              name="email"
              type="email"
              placeholder="Seu email"
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </div>) : (
        <div>
          <form action={entrarComOtop}>
            <p>{state.message}</p>
            <input
              name="email"
              type="hidden"
              value={state.email}
            />

            <input
              name="codigoOtp"
              type="number"
              placeholder="Código recebido no email"
              required
            />
            <button type="submit">Entrar</button>
          </form>
        </div>)}

    </div >

  )






}

export default LoginPage;
