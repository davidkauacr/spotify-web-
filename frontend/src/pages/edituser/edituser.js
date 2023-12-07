import React, { useState, useEffect } from "react";
import axios from "axios";
import "./edituser.css";

const EditUser = ({ id }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user data by ID when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        const userData = response.data; // Adjust this based on your API response structure
        setEmail(userData.email);
        setNome(userData.nome);
        setEndereco(userData.endereco);
        // You may want to skip setting the password fields here for security reasons
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmSenha) {
      alert("Senhas não conferem");
      return;
    }

    try {
      const user = { email, senha, nome, endereco };

      const response = await axios.put(
        `http://localhost:3001/users/${id}`,
        user
      );

      if (response.status === 200) {
        console.log("Usuário atualizado com sucesso!");
      } else {
        console.error("Erro ao atualizar o usuário.");
      }
    } catch (error) {
      console.error("Erro ao atualizar o usuário:", error);
    }
  };

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
            Nova Senha:
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="form-control"
            id="pwd"
            placeholder="Nova Senha"
          />
        </div>
        <div>
          <label htmlFor="confirmPwd" className="form-label">
            Confirme Nova Senha:
          </label>
          <input
            type="password"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            className="form-control"
            id="confirmPwd"
            placeholder="Confirme Nova Senha"
          />
        </div>
        <button type="submit" className="btn-primary">
          Atualizar
        </button>
      </form>
    </>
  );
};

export default EditUser;
