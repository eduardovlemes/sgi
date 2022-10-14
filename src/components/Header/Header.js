import { useNavigate } from "react-router-dom";
import logoSGI from "../../assets/SGI.png"

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    if (window.confirm("Deseja sair?")) {
      navigate("/");
    }
  }

  return (
    <header>
      <img className="header-logo" src={logoSGI} alt="logo" onClick={() => navigate("/mapa")}/>
      <nav>
        <button onClick={() => navigate("/novaempresa")}>
          Cadastrar Empresas
        </button>
        <button onClick={() => navigate("/mapa")}>Mapa</button>
        <button onClick={() => navigate("/novoitem")}>Cadastrar Produtos</button>
        <button onClick={() => navigate("/listaitems")}>
          Lista de Produtos
        </button>
        <button className="logout-button" onClick={handleLogout}>Sair</button>
      </nav>
    </header>
  );
}
