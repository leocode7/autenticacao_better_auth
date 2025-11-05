"use client";

import styles from "./inscricao.module.css";
import { useActionState } from "react";
import { inscricaoAction } from "./inscricaoAction";

type FormState = {
  success: boolean;
  message?: string | undefined;
}

const initialState: FormState = {
  success: false,
  message: undefined
}

const InscricaoPage = () => {

  const [state, formAction, isPedding] = useActionState(inscricaoAction, initialState);

  return (
    <div>
      <h1>Página de inscrição</h1>

      <form action={formAction}>
        <input
          name="name"
          placeholder="Seu nome completo"
          required
          type="text"
        />
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Senha com no mínimo 8 caracteres"
          required
        />
        {state.message && <p>{state.message}</p>}
        <button type="submit">{isPedding ? "Aguarde" : "Criar conta"}</button>
      </form>
    </div>
  )
}

export default InscricaoPage;