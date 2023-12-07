import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function UserSignin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}`
      );
      const usuario = response.data[0];

      if (usuario && usuario.senha === senha) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        navigate("/");
      } else {
        alert(
          "Usuário não encontrado ou senha incorreta. Por favor, tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Tente novamente mais tarde.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Senha:
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="form-control"
            id="pwd"
            placeholder="Senha"
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>
    </>
  );
}
