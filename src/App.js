import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";

import "./App.css";
import { useState } from "react";

const cards = [
  {
    nome: 'Literatura Estrangeira',
    corPrimary: '#D4E2D4',
    corSecondary: '#3F1D38',
    categoria: 'Literatura Estrangeira'
  },
  {
    nome: 'Literatura Brasileira',
    corPrimary: '#FFCACC',
    corSecondary: '#AE445A',
    categoria: 'Literatura Brasileira'
  },
  {
    nome: 'Religiosos',
    corPrimary: '#DBC4F0',
    corSecondary: '#451952',
    categoria: 'Religiosos'
  },
  {
    nome: 'Contos',
    corPrimary: '#C4DFDF',
    corSecondary: '#22668D',
    categoria: 'Contos'
  },
  {
    nome: 'Livros didáticos',
    corPrimary: '#D2E9E9',
    corSecondary: '#068DA9',
    categoria: 'Livros didáticos'
  },
  {
    nome: 'Livros infantis',
    corPrimary: '#D7E9B9',
    corSecondary: '#FFCC70',
    categoria: 'Livros infantis'
  },
  {
    nome: 'Gibis',
    corPrimary: '#F8FDCF',
    corSecondary: '#F39F5A',
    categoria: 'Gibis'
  }
]

function App() {
  const [livros, setLivros] = useState([]);

  function novoLivroCadastrado(livro) {
    setLivros([...livros, livro]);
    console.table(livro)
  }

  return (
    <div className="App">
      <>
        <Banner />
        <Formulario cards={cards.map(cards => cards.nome)} livroCadastrado={livro => novoLivroCadastrado(livro)} />
        <h2 className="title-cards">Organizando meus livros:</h2>
        {cards.map(card => <Cards 
          key={card.nome} 
          nome={card.nome} 
          categoria={card.categoria}
          corPrimary={card.corPrimary} 
          corSecondary={card.corSecondary} 
          livros={livros.filter(livro => livro.categoria === card.categoria)}
        />)}
        <Rodape />
      </>
    </div>
  );
}

export default App;
