import '../Aside/Aside.css';
import RankingGTA from '../RankingGTA/RankingGTA';
import Slide from '../Slide/Slide';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Aside(){
    return(
        <aside className='aside'>
            <Slide></Slide>
            <RankingGTA></RankingGTA>
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="RockstarGames"
            options={{height: 400}}
            />
            aqui vai ter mais coisa....
        </aside>
    )
}

export default Aside;