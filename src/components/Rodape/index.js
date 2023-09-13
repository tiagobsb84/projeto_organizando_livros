import "./Rodape.css";

import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";

const Rodape = () => {
    return(
        <section className="section-rodape">
            <div className="box-network">
                <img src={facebook} alt="icone facebook" />
                <img src={linkedin} alt="icone linkedin" />
            </div>
            <div>
               <p>Desenvolvido por Tiago Silva</p><p>&copy;{new Date().getFullYear()}</p> 
            </div>
        </section>
    )
}

export default Rodape;