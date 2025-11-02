"use client";

import styles from "./inscricao.module.css"

const InscricaoPage = () => {
  return (
    <div>
      <h1>Página de inscrição</h1>

      <form action="">
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
          placeholder="Sua senha"
          required
        />
        <button type="submit">Criar conta</button>
      </form>
    </div>
  )
}

export default InscricaoPage;