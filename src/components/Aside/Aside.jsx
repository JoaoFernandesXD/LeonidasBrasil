import '../Aside/Aside.css';
import RankingGTA from '../RankingGTA/RankingGTA';
import Slide from '../Slide/Slide';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Aside(){
    return(
        <aside className='aside'>
            <Slide></Slide>
            <RankingGTA></RankingGTA>
            
            aqui vai ter mais coisa...
        </aside>
    )
}

export default Aside;