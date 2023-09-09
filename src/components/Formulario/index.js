import { useState } from "react";
import Fields from "./Fields";
import "./Formulario.css";
import ListaCategoria from "./ListaCategoria";

const Formulario = () => {

    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [imagem, setImagem] = useState('');
    const [categoria, setCategoria] = useState('');

    const categorias = [
        'Literatura Brasileira',
        'Literatura Estrangeira',
        'Religiosos',
        'Contos',
        'Livros didáticos',
        'Livros infantis',
        'Gibis'
    ];

    const salvarCard = (event) => {
        event.preventDefault();

        console.log('Dados do livro: ' + nome + autor + imagem + categoria);
        
    }

    return(
        <section className="section-form">
            <h1 className="title-form">Preencha os dados do livro para criar seu card.</h1>
            <form className="form" onSubmit={salvarCard}>
                <Fields 
                    obrigatorio={true}
                    label="Nome do livro" 
                    placeholder={"Digite o nome do livro"} 
                    valor={nome}
                    alterandoValor={valor => setNome(valor)}
                />
                <Fields 
                    obrigatorio={true}
                    label="Nome do autor" 
                    placeholder={"Digite o nome do autor"} 
                    valor={autor}
                    alterandoValor={valor => setAutor(valor)}
                />
                <Fields 
                    obrigatorio={true}
                    label="Imagem do livro" 
                    placeholder={"Adicione a URL da imagem"} 
                    valor={imagem}
                    alterandoValor={valor => setImagem(valor)}    
                />
                <ListaCategoria 
                    label="Escolha categoria" 
                    itens={categorias} 
                    valor={categoria}
                    alterandoValor={valor => setCategoria(valor)}
                />
                <div>
                    <button className="button-form">Criar Card</button>
                </div>
            </form>
        </section>
    )
}

export default Formulario;