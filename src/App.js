import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";

import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Banner />
        <Formulario />
        <h2 className="title-cards">Organizando meus livros:</h2>
        <Cards />
        <Rodape />
      </>

    </div>
  );
}

export default App;
