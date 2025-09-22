import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Livraria Online",
  description: "Projeto base da livraria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
