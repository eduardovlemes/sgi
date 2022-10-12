import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return(
    <form>
      <div>
        <label>Email <input type="email" placeholder="exemplo@mail.com" required value={email} onChange={(event) => setEmail(event.target.value)}/></label>
        <label>Senha <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)}/></label>
        <a>Cadastrar usuário</a>
        <div>
          <button>Acessar</button>
        </div>
      </div>
    </form>
  )
}
