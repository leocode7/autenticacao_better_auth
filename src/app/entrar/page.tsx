"use client"

import styles from "./entrar.module.css";
import { entrarAction } from "./entrarAction";

const LoginPage = () => {

  return (
    <div className={styles.containerPrincipal}>
      <h1>Página de Login</h1>
      <form action={entrarAction}>
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          required
        />
        <button type="submit">Entrar</button>
      </form>

    </div>
  )
}

export default LoginPage;
