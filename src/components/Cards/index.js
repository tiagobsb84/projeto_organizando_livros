import CardLivro from "../CardLivro";
import "./Cards.css";

const Cards = (props) => {
    return (
        <section className="section-cards" style={{ backgroundColor: props.corPrimary}}>
            <h3 className="title-category" style={{ borderColor: props.corSecondary}}>{props.nome}</h3>
            <CardLivro corPrimary={props.corPrimary} corSecondary={props.corSecondary} />
        </section>
    )
}

export default Cards;