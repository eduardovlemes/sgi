import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoSGI from "../../assets/SGI.png";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    try {
      event.preventDefault();
      if (!email) {
        alert("O preenchimento do campo Email é obrigatório.");
        return;
      } else if (!password) {
        alert("O preenchimento do campo Senha é obrigatório.");
        return;
      }
      event.target.checkValidity();
      navigate("/mapa");
    } catch (error) {
      alert("Erro no preenchimento dos campos. Tente novamente.");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <img className="login-logo" src={logoSGI} alt="logo" />
      <div className="login-fields">
        <label>
          Email
          <input
            className="login-input"
            type="email"
            placeholder="exemplo@mail.com"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Senha
          <input
            className="login-input"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <div className="button-container">
          <button className="login-button" type="submit">
            Acessar
          </button>
        </div>
      </div>
    </form>
  );
}
