import { Link } from "react-router-dom";
import Cards from '../../componentes/Cards/Cards'

const linkStyle = {
  color: "gray",
  textDecoration: "none",
  marginLeft: "10px",
  fontSize: "14px",
  backgroundColor: "lightgray",
  padding: "5px 10px",
  borderRadius: "5px",
};

export default function PlayLists() {
  return (
    <div className="container">
      <Cards />
      <Link to="/playlists/search" style={linkStyle}>
        Ir para a página de buscas
      </Link>
    </div>
  );
}
