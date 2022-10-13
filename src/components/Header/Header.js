import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    if (confirm("Deseja sair?")) {
      navigate("/");
    }
  }

  return (
    <header>
      <nav>
        <button onClick={() => navigate("/novaempresa")}>
          CADASTRAR EMPRESA
        </button>
        <button onClick={() => navigate("/mapa")}>MAPA</button>
        <button onClick={() => navigate("/novoitem")}>CADASTRAR PRODUTO</button>
        <button onClick={() => navigate("/listaitems")}>
          LISTA DE PRODUTOS
        </button>
        <button onClick={handleLogout}>SAIR</button>
      </nav>
    </header>
  );
}
