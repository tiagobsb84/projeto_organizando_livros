import "./Cards.css";

const Cards = (props) => {
    return (
        <section className="section-cards" style={{ backgroundColor: props.corPrimary}}>
            <h3 className="title-category" style={{ borderColor: props.corSecondary}}>{props.nome}</h3>
        </section>
    )
}

export default Cards;