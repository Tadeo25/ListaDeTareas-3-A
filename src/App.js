import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import Subtitulo from "./components/Subtitulo";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Titulo emoji="📒"/>
      <Subtitulo comision="3A" />
    </>
  );
}

export default App;
