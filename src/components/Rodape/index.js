import "./Rodape.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const Rodape = () => {
    return(
        <section className="section-rodape">
            <div className="box-network">
                <a className="link-network" href="https://www.linkedin.com/in/tiago-silva-b11350197/" target="_blank" rel="noreferrer"><img className="image-network" src={linkedin} alt="icone linkedin" /></a>
                <a className="link-network" href="https://github.com/tiagobsb84" target="_blank" rel="noreferrer"><img className="image-network" src={github} alt="icone github" /></a>
            </div>
            <div>
               <p>Desenvolvido por Tiago Silva</p><p>&copy;{new Date().getFullYear()}</p> 
            </div>
        </section>
    )
}

export default Rodape;