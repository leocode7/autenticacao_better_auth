"use client"

import { useActionState } from "react";
import styles from "./entrar.module.css";
import { entrarAction } from "./entrarAction";

type FormState = {
  success: boolean;
  message?: string | undefined;
}

const initialState: FormState = {
  success: false,
  message: undefined
}

const LoginPage = () => {

  const [state, formAction, isPendding] = useActionState(entrarAction, initialState)

  return (
    <div className={styles.containerPrincipal}>
      <h1>Página de Login</h1>
      <form action={formAction}>
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Sua senha"
          required
        />
        {state.message && <p>{state.message}</p>}
        <button type="submit">{isPendding ? "Entrando" : "Entrar"}</button>
      </form>

    </div>
  )
}

export default LoginPage;
