import HotRumors from '../HotRumors/HotRumors';
import MainAlerta from '../MainAlerta/MainAlerta';
import News from '../News/News';
import ListConteudoYT from '../ListConteudoYT/ListConteudoYT';
import Forum from '../Forum/Forum';

import '../MainPrincipal/MainPrincipal.css';




function MainPrincipal(){
    return (
            <div className='container'>
                <MainAlerta></MainAlerta>
                <HotRumors></HotRumors>
                <News></News>
                <ListConteudoYT></ListConteudoYT>
                <Forum></Forum>
            </div>
    )
}


export default MainPrincipal;