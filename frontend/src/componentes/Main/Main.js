import { Link } from "react-router-dom";


export default function Main(){
    return(
      <main>
        <section className="hero">
          <h1>Descubra novas músicas.</h1>
          <p>Explore nossa vasta coleção de músicas e crie suas próprias playlists.</p>
          <Link to="/playlists" className="cta-button">Comece a ouvir</Link>
        </section>
      </main>
      



    );

}