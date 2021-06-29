import imageRasen from '../../images/englishpremierleague.png'


const ImageEngLeague = (props) => {
    return (
        <section className="secImg">
            <div>
                <img src={imageRasen} alt="Rasen" />
            </div>
            <div>
                <h1>{props.heading1}</h1>
                <h2>{props.heading2}</h2>
            </div>
        </section>
    );
}

export default ImageEngLeague;