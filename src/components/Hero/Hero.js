import './Hero.scss';

import HeaderImg from '../../images/header-img.png';
import Arrowup from '../../images/arrow-up.png';

const Hero = () => {
    return (<header>
        <figure>
            <img src={HeaderImg} alt='' />
            <figcaption>
                <h1>Find Your League</h1>
            </figcaption>
        </figure>
        <aside>
            <span className="arrow-up">
                <img src={Arrowup} />
            </span>
        </aside>
    </header>
    );
}

export default Hero;