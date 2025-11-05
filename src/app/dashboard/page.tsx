"use client"

import { signOut } from "@/lib/auth-client";

const dashboardPage = () => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard</h1>
      <button onClick={() => {signOut()}}>Sair</button>
    </div>
  )
}

export default dashboardPage;
