import EineKleineNachtmusik from "../assets/musicas/Eine Kleine Nachtmusik.mp3";
import MoonlightSonata from "../assets/musicas/Beethoven - Moonlight Sonata 1st Movement (320 kbps).mp3";
import Gymnopedie from "../assets/musicas/Erik Satie - Gymnopédie No.1 (320 kbps).mp3";
import Storm from "../assets/musicas/Antonio Vivaldi - Storm (320 kbps).mp3";
import HungarianDance from "../assets/musicas/Johannes Brahms - Hungarian Dance No. 5 (320 kbps).mp3";
import Requiem from "../assets/musicas/Mozart - Requiem (320 kbps).mp3";
import RequimDMinor from "../assets/musicas/Mozart - Requiem in D Minor (Lacrimosa) (320 kbps).mp3";
import React from 'react'




function Deletar({ cardMusic }) {
    function deleteMusic(playlistIndex, musicIndex) {
    
      cardMusic[playlistIndex].musicas.splice(musicIndex, 1);
    }
  
    return (
      <div>
        {cardMusic.map((playlist, playlistIndex) => (
          <div key={playlist.id}>
            <h2>{playlist.titleMusic}</h2>
            <img src={playlist.linkPhoto} alt={playlist.titleMusic} />
            <ul>
              {playlist.musicas.map((music, musicIndex) => (
                <li key={music.id}>
                  {music.nome}
                  {music.deletable && (
                    <button
                      onClick={() => deleteMusic(music.id)}
                    >
                      Excluir
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
export const cardMusic = [
    {
        id: 0,
        titleMusic: "PlayList para Estudos",
        linkPhoto: "https://i.scdn.co/image/ab67706f0000000281c231a9eaed1e0749b68511",
        musicas: [
            {
                id: 1,
                nome: "Eine Kleine Nachtmusik",
                arquivo: EineKleineNachtmusik, // Colocar o caminho da música
                deletable: true,
            },
            {
                id: 2,
                nome: "Beethoven - Moonlight Sonata 1st Movement",
                arquivo: MoonlightSonata, // Colocar o caminho da música
                deletable: true,
            },
            {
                id: 3,
                nome: "Erik Satie - Gymnopédie No.1",
                arquivo: Gymnopedie, // Colocar o caminho da música
                deletable: true,
            },
            {
                id: 4,
                nome: "Antonio Vivaldi - Storm",
                arquivo: Storm, // Colocar o caminho da música
                deletable: true,
            }
        ]
    },
    {
        id: 1,
        titleMusic: "PlayList para Treinar",
        linkPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VgZ49BqnY1-4LaQiECMotxrfZYwftVrC224bNXN-mG01Vx5vm25xT-Oh-C7CoriMtKo&usqp=CAU",
        musicas: [
            {
                id: 1,
                nome: "Johannes Brahms - Hungarian Dance No. 5",
                arquivo: HungarianDance, // Colocar o caminho da música
            },
            {
                id: 2,
                nome: "Mozart - Requiem",
                arquivo: Requiem, // Colocar o caminho da música
            },
            {
                id: 3,
                nome: "Mozart - Requiem in D Minor (Lacrimosa)",
                arquivo: RequimDMinor, // Colocar o caminho da música
            },
            {
                id: 4,
                nome: "Eine Kleine Nachtmusik",
                arquivo: EineKleineNachtmusik, // Colocar o caminho da música
            }
        ]
    },
    {
        id: 2,
        titleMusic: "PlayList para Relaxar",
        linkPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fsLt1r_CTSZdjzKyI87soy6tLpYOtangozuBUJdnzx51jJFqg_wR4pFcTpmuTAwiLmU&usqp=CAU",
        musicas: [
            {
                id: 1,
                nome: "Beethoven - Moonlight Sonata 1st Movement",
                arquivo: MoonlightSonata, // Colocar o caminho da música
            },
            {
                id: 2,
                nome: "Erik Satie - Gymnopédie No.1",
                arquivo: Gymnopedie, // Colocar o caminho da música
            },
            {
                id: 3,
                nome: "Antonio Vivaldi - Storm",
                arquivo: Storm, // Colocar o caminho da música
            },
            {
                id: 4,
                nome: "Johannes Brahms - Hungarian Dance No. 5",
                arquivo: HungarianDance, // Colocar o caminho da música
            }
        ]
    },
    {
        id: 3,
        titleMusic: "PlayList para Bons Sonhos",
        linkPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExWWfUWDkV4DmiMMBnfXiu99akIHEY2tdzQ&usqp=CAU",
        musicas: [
            {
                id: 1,
                nome: "Mozart - Requiem",
                arquivo: Requiem, // Colocar o caminho da música
            },
            {
                id: 2,
                nome: "Mozart - Requiem in D Minor (Lacrimosa)",
                arquivo: RequimDMinor, // Colocar o caminho da música
            },
            {
                id: 3,
                nome: "Eine Kleine Nachtmusik",
                arquivo: EineKleineNachtmusik, // Colocar o caminho da música
            },
            {
                id: 4,
                nome: "Beethoven - Moonlight Sonata 1st Movement",
                arquivo: MoonlightSonata, // Colocar o caminho da música
            }
        ]
    }
]

export default Deletar;
