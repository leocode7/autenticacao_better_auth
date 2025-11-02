import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1>BEM VINDO À HOME</h1>
      <Link href={"/inscricao"}>Increver-se</Link>
      <Link href={"/entrar"}>Entrar</Link>
    </div>
  );
}
