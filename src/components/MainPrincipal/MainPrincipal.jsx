import HotRumors from '../HotRumors/HotRumors';
import MainAlerta from '../MainAlerta/MainAlerta';
import News from '../News/News';


import '../MainPrincipal/MainPrincipal.css';


function MainPrincipal(){
    return (
            <div className='container'>
                <MainAlerta></MainAlerta>
                <HotRumors></HotRumors>
                <News></News>
            </div>
    )
}


export default MainPrincipal;