"use client"

import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const dashboardPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/");
    }
  }, [isPending, session, router]);

  if (isPending)
    return <p>Carregando...</p>
  if (!session?.user)
    return <p>Redirecionando...</p>

  const { user } = session;

  return (
    <div>
      <p>{`Bem-vindo ao Dashboard, ${user.name}`}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => { signOut() }}>Sair</button>
    </div>
  )
}

export default dashboardPage;
