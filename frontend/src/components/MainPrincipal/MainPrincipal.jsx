import HotRumors from '../HotRumors/HotRumors';
import MainAlerta from '../MainAlerta/MainAlerta';
import News from '../News/News';
import ListConteudoYT from '../ListConteudoYT/ListConteudoYT';

import '../MainPrincipal/MainPrincipal.css';



function MainPrincipal(){
    return (
            <div className='container'>
                <MainAlerta></MainAlerta>
                <HotRumors></HotRumors>
                <News></News>
                <ListConteudoYT></ListConteudoYT>
            </div>
    )
}


export default MainPrincipal;