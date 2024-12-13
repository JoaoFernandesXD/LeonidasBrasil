import Aside from '../Aside/Aside';
import Footer from '../Foooter/footer';
import '../Main/Main.css';


function Main(){
    return(
        <>
        <main className='container'>
            <div className='row'>
                <Aside></Aside>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Main;