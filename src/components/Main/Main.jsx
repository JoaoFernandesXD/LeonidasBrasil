import Aside from '../Aside/Aside';
import '../Main/Main.css';


function Main(){
    return(
        <>
        <main className='container'>
            <div className='row'>
                <Aside></Aside>
            </div>
        </main>
        </>
    )
}

export default Main;