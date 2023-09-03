import "./Banner.css";

import ImagemBanner from '../../assets/banner-principal-1.png';

const Banner = () => {
    return(
        <div className="bannerPrincipal">
            <div>
                <ul className='list_books'>
                    <li className='item-List'>Home</li>
                    <li className='item-List'>Formulário</li>
                    <li className='item-List'>Lista de livros</li>
                </ul>
            </div>
            <img src={ImagemBanner} alt='Imagem do Banner principal' />
        </div>
    )
}

export default Banner;