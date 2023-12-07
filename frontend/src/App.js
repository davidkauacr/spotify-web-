import "./App.css";
import Header from "./componentes/Header/Header.js";
import Main from "./componentes/Main/Main.js";
import Footer from "./componentes/Footer/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faq from "./pages/faq/Faq.js";
import UserSignup from "./pages/signup/cadastro.js";
import UserSignin from "./pages/signin/login.js";
import PlayLists from "./pages/playlists/playLists.js";
import MusicList from "./componentes/MusicList/MusicList.js";
import CadastroPlaylist from "./componentes/Cadastro Playlist/cadastro_playlist.js";
import EditUser from "./pages/edituser/edituser.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/users/signup" element={<UserSignup />} />
          <Route path="/users/signin" element={<UserSignin />} />
          <Route path="/playlists" element={<PlayLists />} />
          <Route path="/playlists/playlist/:id" element={<MusicList />} />
          <Route path="/cadastro_playlist" element={<CadastroPlaylist />} />
          <Route path="/users/:id" element={<EditUser />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
