import Aside from '../Aside/Aside';
import Footer from '../Footer/rodape';
import MainPrincipal from '../MainPrincipal/MainPrincipal';

import '../Main/Main.css';


function Main(){
    return(
        <>
        <main className='container_main'>
            <Aside></Aside>
            <MainPrincipal>
                
            </MainPrincipal>
        </main>
        <Footer />
        </>
    )
}

export default Main;