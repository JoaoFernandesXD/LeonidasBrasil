import '../RankingGTA/RankingGTA.css';
import SingleRankingGTA from '../SingleRankingGTA/SingleRankingGTA';
function RankingGTA(){
    return(
        <>
        <div className='container_ranking'>
            <div className='container__titulo'>
                <p>Ranking dos jogos GTA</p>
                <p>Os jogos mais vendidos da franquia</p>
            </div>
            <div className='container__list_single'>
                <SingleRankingGTA image="https://e7.pngegg.com/pngimages/468/230/png-clipart-grand-theft-auto-v-logo-playstation-3-jpeg-gta-5-logo-text-logo-thumbnail.png" name="Grand Theft Auto V" downloads="200 milhões" years="2013"></SingleRankingGTA>
                <SingleRankingGTA image="https://iconape.com/wp-content/png_logo_vector/grand-theft-auto-san-andreas-logo.png" name="Grand Theft Auto: San Andreas" downloads="27,5 milhões" years="2004"></SingleRankingGTA>
                <SingleRankingGTA image="https://upload.wikimedia.org/wikipedia/commons/5/5d/GTA_IV_logo.png" name="Grand Theft Auto IV" downloads="25 milhões" years="2008"></SingleRankingGTA>
                <SingleRankingGTA image="https://upload.wikimedia.org/wikipedia/commons/2/20/Grand_Theft_Auto_Vice_City_logo.png" name="Grand Theft Auto: Vice City" downloads="17,5 milhões" years="2002"></SingleRankingGTA>
                <SingleRankingGTA image="https://iconape.com/wp-content/png_logo_vector/grand-theft-auto-iii-logo.png" name="Grand Theft Auto III" downloads="14,5 milhões" years="2001"></SingleRankingGTA>
                <SingleRankingGTA image="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png" name="Grand Theft Auto VI" downloads="?? milhões" years="2025"></SingleRankingGTA>
            </div>
        </div>
        </>
    )
}
export default RankingGTA;