import "./Formulario.css";

const Formulario = () => {
    return(
        <section className="section-form">
            <h1 className="title-form">Preencha os dados do livro para criar seu card.</h1>
            <form className="form">
                <div className="box-field">
                    <label className="label-form">Nome do livro</label>
                    <input className="field-livro field-form" /> 
                </div>
                <div className="box-field">
                    <label className="label-form">Nome do autor</label>
                    <input className="field-autor field-form" />
                </div>
                <div className="box-field">
                    <label className="label-form">Imagem do livro</label>
                    <input className="field-image field-form" />
                </div>
                <div>
                    <label htmlFor="book" className="box-field">Escolha categoria</label>
                    <select className="field-form field-form-select" id="book" name="book">
                        <option>Literatura Estrangeira</option>
                        <option>Estudos</option>
                        <option>Literatura Brasileira</option>
                    </select>
                </div>
                <div>
                    <button className="button-form">Criar Card</button>
                </div>
            </form>
        </section>
    )
}

export default Formulario;