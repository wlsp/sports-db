import React from 'react';



//import Header2 from '../components/LeagueDetailView/Header2';
import LinkTeam from '../components/LeagueDetailView/LinkTeam';
import AstonVilla from '../components/LeagueDetailView/Header3AstonVilla';
import Header3Brentford from '../components/LeagueDetailView/Header3Brentford';
import ImageEngLeague from '../components/LeagueDetailView/ImagePremierLeage';
import '../components/LeagueDetailView/Header1.scss';
import Arsenal from '../components/LeagueDetailView/Header3Arsenal';



function Country() {
    return (<div className='country'>


        <ImageEngLeague></ImageEngLeague>
        {/* <Header2></Header2> */}
        <Arsenal></Arsenal>
        <AstonVilla></AstonVilla>
        <Header3Brentford></Header3Brentford>

    </div>
    );
}

export default Country;