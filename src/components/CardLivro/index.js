import "./CardLivro.css";

const CardLivro = (props) => {
    return(
        <div className="box-cards">
            <div className="box-card" style={{ backgroundColor: props.corSecondary }}>
                <div className="box-image">
                    <img className="image-card" src="https://github.com/tiagobsb84.png" alt="livro" />
                </div>
                <h4 className="title-book" style={{ color: props.corPrimary }}>O livro</h4>
                <p className="author" style={{ color: props.corPrimary }}>Fulano Sousa</p>
            </div>
        </div>
    )
}

export default CardLivro;