import "./Fields.css";

const Fields = (props) => {
    return (
        <div className="box-field">
            <label className="label-form">{props.label}</label>
            <input className="field-livro field-form" placeholder={props.placeholder} />
        </div>
    )
}

export default Fields;