import '../LeagueDetailView/LeagueDetailView.scss';

import { Link } from 'react-router-dom';



const Arsenal = ({ linkTo, mainText, secondText }) => {
  return (

    <section className="secLink"><Link className='linking' to={linkTo} >
      {mainText}
      <span>{secondText}</span>
    </Link>
    </section>


  );
};

export default Arsenal;
