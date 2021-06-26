import '../LeagueDetailView/LeagueDetailView.scss';
import {
    Link
} from "react-router-dom"

const Arsenal = ({ linkTo }) => {
    return (
        <Link className="linking" to={linkTo} id="arsenalEng">Arsenal <span>Holloway, London</span></Link >
    );
}

export default Arsenal;