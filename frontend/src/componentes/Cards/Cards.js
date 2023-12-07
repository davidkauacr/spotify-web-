import axios from "axios";
import { useState, useEffect } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";

export default function Cards() {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/playlists/${id}`)
      .then((response) => {
        setPlaylists(playlists.filter((playlist) => playlist.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao excluir a playlist:", error);
      });
  };

  const [playlists, setPlaylists] = useState([]);
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

  useEffect(() => {
    axios
      .get("http://localhost:3001/playlists")
      .then((response) => {
        const playlistsFiltradas = response.data.filter((playlist) => {
          if (usuarioLogado) {
            return true;
          }
          return !playlist.privada;
        });
        setPlaylists(playlistsFiltradas);
        console.log("JSON ", playlistsFiltradas);
      })
      .catch((error) => {
        console.error("Erro ao obter playlists:", error);
      });
  }, [usuarioLogado]);

  return (
    <div className="music-right">
      <h1>Top {playlists.length} PlayLists mais tocadas em 2023!</h1>

      {usuarioLogado && (
        <Link to="/cadastro_playlist" className="cta-button">
          Cadastrar playlist
        </Link>
      )}
      <div className="card-container">
        {playlists.map((playlist, index) => (
          <Link
            className="music-card"
            to={`playlist/${playlist.id}`}
            key={index}
          >
            <img src={playlist.linkPhoto} alt="Capa da Música" />
            <h3>{playlist.titleMusic}</h3>
            <p>{playlist.name}</p>
            {usuarioLogado && (
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDelete(playlist.id)}
              >
                <BiTrash />
              </button>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
