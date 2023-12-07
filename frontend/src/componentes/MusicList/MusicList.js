import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MusicList.css";
import axios from "axios";

function MusicList() {
  const [currentSong, setCurrentSong] = useState(null);
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/playlists/${id}`)
      .then((response) => {
        setPlaylist(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a playlist:", error);
      });
  }, [id]);

  if (!playlist) {
    return <div>Playlist não encontrada.</div>;
  }

  const playSong = (audioUrl) => {
    if (currentSong) {
      currentSong.pause();
      currentSong.currentTime = 0;
    }

    const audio = new Audio(audioUrl);
    audio.play();
    setCurrentSong(audio);
  };

  return (
    <div>
      <h1 className="playlist-title">{playlist.titleMusic}</h1>
      <img
        className="playlist-image"
        src={playlist.linkPhoto}
        alt={playlist.titleMusic}
      />
      <ul className="music-list">
        {playlist.musicas.map((musica) => (
          <div key={musica.id}>
            <li className="music-item">{musica.nome}</li>
            <span
              className="play-icon"
              onClick={() => playSong(musica.arquivo)}
            >
              &#9654; Play
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MusicList;
