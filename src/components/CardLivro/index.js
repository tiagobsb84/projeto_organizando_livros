import "./CardLivro.css";

const CardLivro = (props) => {
    return(
        <div className="box-cards">
            <div className="box-card" style={{ backgroundColor: props.corSecondary }}>
                <div className="box-image">
                    <img className="image-card" src={props.imagem} alt={props.nome} />
                </div>
                <h4 className="title-book" style={{ color: props.corPrimary }}>{props.nome}</h4>
                <p className="author" style={{ color: props.corPrimary }}>{props.autor}</p>
                <p className="author" style={{ color: props.corPrimary }}>{props.categoria}</p>
            </div>
        </div>
    )
}

export default CardLivro;

//{nome, autor, imagem, categoria, corPrimary, corSecondary}