import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Header from "./components/Header";
import Formtarea from "./components/Formtarea";

function App() {
  return (
    <>
      <Header logo="https://rollingcodeschool.com/wp-content/uploads/2019/12/ingenia-logo-transparencia_Mesa-de-trabajo-1-copia-e1575648427572.png" />
      <Titulo emoji="📒" />
      <Subtitulo comision="3A" />
      <Formtarea/>
    </>
  );
}

export default App;
