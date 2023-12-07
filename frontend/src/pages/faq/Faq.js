import React, { useState } from "react";
import ItemFaq from "../../componentes/ItemFaq/ItemFaq.js";
import "./faq.css";

function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: "Como eu crio uma lista de reprodução?",
      answer:
        'Para criar uma lista de reprodução, vá até a sua Biblioteca e clique no botão "Criar Lista de Reprodução". Dê um nome e uma descrição para a sua lista de reprodução e, em seguida, comece a adicionar suas músicas favoritas a ela.',
      open: true,
    },
    {
      question: "Posso baixar músicas para ouvir offline?",
      answer:
        "Sim, usuários do Spotify Premium podem baixar músicas, álbuns e listas de reprodução para ouvir offline. Basta clicar no botão de download ao lado do conteúdo que você deseja salvar.",
      open: false,
    },
    {
      question: "Como posso descobrir novas músicas?",
      answer:
        'Existem várias maneiras de descobrir novas músicas no Spotify. Você pode explorar playlists curadas na seção "Explorar", conferir recomendações personalizadas na aba "Descobrir" e ouvir estações de rádio baseadas em seus artistas ou gêneros favoritos. Além disso, você pode seguir amigos ou playlists públicas para encontrar faixas novas.',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <ItemFaq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Faq;
