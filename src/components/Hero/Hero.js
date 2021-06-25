import './Hero.scss';

import HeaderImg from '../../images/header-img.png';

const Hero = () => {
    return (<header>
        <figure>
            <img src={HeaderImg} alt='' />
            <figcaption>
                <h1>Find Your League</h1>
            </figcaption>
        </figure>
        <aside>
            <span className="arrow-up">&#8679;</span>
        </aside>
    </header>
    );
}

export default Hero;