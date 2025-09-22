export default function CadastroPage() {
  return (
    <>
      <h2>Cadastro</h2>
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
