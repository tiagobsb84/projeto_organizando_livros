import Fields from "./Fields";
import "./Formulario.css";
import ListaCategoria from "./ListaCategoria";

const Formulario = () => {

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
        console.log('chamado')
    }

    return(
        <section className="section-form">
            <h1 className="title-form">Preencha os dados do livro para criar seu card.</h1>
            <form className="form" onSubmit={salvarCard}>
                <Fields label="Nome do livro" placeholder={"Digite o nome do livro"} />
                <Fields label="Nome do autor" placeholder={"Digite o nome do autor"} />
                <Fields label="Imagem do livro" placeholder={"Adicione a URL da imagem"} />
                <ListaCategoria label="Escolha categoria" itens={categorias} />
                <div>
                    <button className="button-form">Criar Card</button>
                </div>
            </form>
        </section>
    )
}

export default Formulario;