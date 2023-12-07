import axios from "axios";
import { useState } from "react";
import "./cadastro.css";

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState("");

  async function checkUserExists(email) {
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}`
      );
      return response.data.length > 0; // Se existir algum usuário com o mesmo email, retorna verdadeiro.
    } catch (error) {
      console.error("Erro ao verificar a existência do usuário:", error);
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (senha !== confirmSenha) {
      window.alert("Senhas não conferem");
      return;
    }

    if (await checkUserExists(email)) {
      alert("Este usuário já existe. Escolha outro email.");
      return;
    }

    try {
      const user = { email, senha, nome, endereco };

      const response = await axios.post("http://localhost:3001/users", user);

      if (response) {
        window.alert("Usuário cadastrado com sucesso!");
      } else {
        window.alert("Erro ao cadastrar o usuário.");
      }
    } catch (error) {
      window.alert("Erro ao cadastrar o usuário:");
    }

    setEmail("");
    setEndereco("");
    setSenha("");
    setNome("");
    setConfirmSenha("");
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
            placeholder="Email ou Usuário"
          />
        </div>
        <div>
          <label htmlFor="Name" className="form-label">
            Nome:
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="form-control"
            id="Name"
            placeholder="Nome"
          />
        </div>
        <div>
          <label htmlFor="Address" className="form-label">
            Endereço:
          </label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="form-control"
            id="Address"
            placeholder="Endereço"
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
          />
        </div>
        <div>
          <label htmlFor="confirmPwd" className="form-label">
            Confirme Senha:
          </label>
          <input
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            className="form-control"
            id="confirmPwd"
            placeholder="Confirme Senha"
          />
        </div>
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </form>
    </>
  );
}
