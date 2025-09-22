import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>📚 Livraria Online</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/livros">Livros</Link>
        <Link href="/categorias">Categorias</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
