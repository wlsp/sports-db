import '../LeagueDetailView/LeagueDetailView.scss';
import { Link } from 'react-router-dom';

const Arsenal = ({ linkTo, mainText, secondText }) => {
  return (
    <Link className='linking' to={linkTo} id='arsenalEng'>
      {mainText}
      <span>{secondText}</span>
    </Link>
  );
};

export default Arsenal;
