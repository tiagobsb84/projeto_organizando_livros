import "./Fields.css";

const Fields = (props) => {

    const mudancaCampo = (event) => {
        props.alterandoValor(event.target.value);
    }

    return (
        <div className="box-field">
            <label className="label-form">{props.label}</label>
            <input value={props.valor} onChange={mudancaCampo} className="field-livro field-form" placeholder={props.placeholder} />
        </div>
    )
}

export default Fields;