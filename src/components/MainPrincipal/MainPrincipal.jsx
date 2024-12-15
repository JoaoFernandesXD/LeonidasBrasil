import HotRumors from '../HotRumors/HotRumors';
import MainAlerta from '../MainAlerta/MainAlerta';


import '../MainPrincipal/MainPrincipal.css';

function MainPrincipal(){
    return (
            <div className='container'>
                <MainAlerta></MainAlerta>
                <HotRumors></HotRumors>
            </div>
    )
}


export default MainPrincipal;