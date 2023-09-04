import "./ListaCategoria.css";

const ListaCategoria = (props) => {
    return (
        <div>
            <label htmlFor="book" className="label-select">{props.label}</label>
            <select className="field-form field-form-select" id="book" name="book">
               {
                props.itens.map(item => (<option key={item}>{item}</option>))
               }
            </select>
        </div>
    )
}

export default ListaCategoria;