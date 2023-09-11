import "./Banner.css";

import ImagemBanner from '../../assets/banner-principal-1.png';

const Banner = () => {
    return(
        <div className="bannerPrincipal">
            <img src={ImagemBanner} alt='Imagem do Banner principal' />
        </div>
    )
}

export default Banner;