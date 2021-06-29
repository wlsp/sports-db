import './Hero.scss';

import HeaderImg from '../../images/header-img.png';
import Arrowup from '../../images/arrow-up.png';

const Hero = () => {
    return (<header>
        <figure>
            <img src={HeaderImg} alt='baseball base' />
            <figcaption>
                <h1>Find Your League</h1>
            </figcaption>
        </figure>
        <aside className="titleContainer">
            <span className="titleWrapper">
                <img src={Arrowup} alt='Up-Arrow' />
            </span>
        </aside>
    </header>
    );
}

export default Hero;