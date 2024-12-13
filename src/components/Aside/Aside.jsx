import '../Aside/Aside.css';
import RankingGTA from '../RankingGTA/RankingGTA';
import Slide from '../Slide/Slide';


function Aside(){
    return(
        <aside className='aside'>
            <Slide></Slide>
            <RankingGTA></RankingGTA>
            vamos continuar?
        </aside>
    )
}

export default Aside;