import Link from "next/link";


export default function ListaLivros() {
  return (
    <>
      <h2>Catálogo de Livros</h2>
      <ul>
        <li>
          <Link href="/livros/1">📘 A Revolução dos Bichos</Link>
        </li>
        <li>
          <Link href="/livros/2">📕 1984</Link>
        </li>
        <li>
          <Link href="/livros/3">📗 A Menina que Roubava Livros</Link>
        </li>
      </ul>
    </>
  );
}
