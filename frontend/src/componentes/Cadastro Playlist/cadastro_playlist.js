import axios from "axios";
import { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";
export default function CadastroPlaylist() {
  const [nomePlaylist, setNomePlaylist] = useState("");

  function CadastrarPlaylist(e) {
    e.preventDefault();

    if (nomePlaylist.trim() === "") {
      alert("O nome da playlist não pode ser vazio.");
      return;
    }

    const novaPlaylist = {
      titleMusic: nomePlaylist,
      linkPhoto:
        "https://media.istockphoto.com/id/1253321867/pt/vetorial/music-note-key-button-icon-song-melody-on-circle-shape-symbol-push-click-media-player-new.jpg?s=1024x1024&w=is&k=20&c=b0N9NppWE41WyMeJa1P8gOdB66EnZTPXA6QMfU_IB0A=",
      musicas: [],
      privada: true,
    };

    //cardMusic.push(novaPlaylist);

    axios
      .post("http://localhost:3001/playlists", novaPlaylist)
      .then((response) => {
        console.log("Playlist cadastrada com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar playlist:", error);
      });

    setNomePlaylist("");
    //console.log("Cadastrou a playlist!", cardMusic);
  }

  return (
    <div className="cadastro_playlist">
      <h1>Meu cadastro de Playlist:</h1>
      <form onSubmit={CadastrarPlaylist}>
        <div>
          <input
            className="botao_input"
            type="text"
            placeholder="Nome da Playlist:"
            value={nomePlaylist}
            onChange={(e) => setNomePlaylist(e.target.value)}
          />
        </div>
        <div>
          <input
            className="botao_cadastrar"
            type="submit"
            value="Cadastrar Playlist"
          />
          <br></br>
          <Link to="/playlists" className="cta-button">
            voltar
          </Link>
        </div>
      </form>
    </div>
  );
}
