import CardLivro from "../CardLivro";
import "./Cards.css";

const Cards = (props) => {
    return (
        <section className="section-cards" style={{ backgroundColor: props.corPrimary}}>
            <h3 className="title-category" style={{ borderColor: props.corSecondary}}>{props.nome}</h3>
            {props.livros.map(livro => <CardLivro 
                key={livro.nome} 
                nome={livro.nome} 
                autor={livro.autor} 
                imagem={livro.imagem} />)}
        </section>
    )
}

export default Cards;