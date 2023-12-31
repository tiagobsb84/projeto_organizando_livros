import "./ListaCategoria.css";

const ListaCategoria = (props) => {
    return (
        <div>
            <label htmlFor="book" className="label-select">{props.label}</label>
            <select required={props.obrigatorio} onChange={evento => props.alterandoValor(evento.target.value)} className="field-form field-form-select" id="book" name="book" value={props.valor}>
                <option value=""></option>
               {
                props.itens.map(item => (<option key={item}>{item}</option>))
               }
            </select>
        </div>
    )
}

export default ListaCategoria;