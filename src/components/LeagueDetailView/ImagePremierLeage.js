


const ImageEngLeague = (props) => {
    return (
        <section className="secImg">
            <div>
                <img src={props.imageRasen} alt="Rasen" />
            </div>
            <div>
                <h1>{props.heading1}</h1>
                <h2>{props.heading2}</h2>
            </div>
        </section>
    );
}

export default ImageEngLeague;