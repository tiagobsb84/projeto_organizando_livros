import "./CardLivro.css";

const CardLivro = ({nome, autor, imagem, corPrimary, corSecondary}) => {
    return(
        <div className="box-cards">
            <div className="box-card" style={{ backgroundColor: corSecondary }}>
                <div className="box-image">
                    <img className="image-card" src={imagem} alt={nome} />
                </div>
                <h4 className="title-book" style={{ color: corPrimary }}>{nome}</h4>
                <p className="author" style={{ color: corPrimary }}>{autor}</p>
            </div>
        </div>
    )
}

export default CardLivro;