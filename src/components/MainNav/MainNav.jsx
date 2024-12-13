import '../MainNav/MainNav.css'


function MainNav() {
    return(
        <>
            <div className='main-nav'>
                <div className='row'>
                <ul className="d-flex">
                    <a href="/inicio">
                        <li className="nav--item">
                            <i className="fas fa-home" aria-hidden="true"></i> Início
                        </li>
                    </a>

                        <a href="/noticias">
                            <li className="nav--item">
                                <i className="fas fa-bullhorn" aria-hidden="true"></i> Noticias
                            </li>
                        </a>

                        <a href="#">
                            <li className="nav--item">
                                <i className="fas fa-comment-alt" aria-hidden="true"></i> Rumores
                            </li>
                        </a>

                        <a href="#">
                            <li className="nav--item">
                                <i className="fas fa-store" aria-hidden="true"></i> Plataformas 
                            </li>
                        </a>

                        <a href="#">
                            <li className="nav--item">
                                <i className="fas fa-music" aria-hidden="true"></i> Enquetes
                            </li>
                        </a>

                        <a className="trigger--side-nav">
                            <li className="nav--item">
                                <i clclassNameass="fas fa-bars" aria-hidden="true"></i> Extras
                            </li>
                        </a>

                        <span className="nav--indicator"></span>

                                                    <button className="modal-trigger nav--btn d-lg-flex align-items-center justify-content-center d-none" data-modal="login">
                                <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
                                Fazer Login
                            </button>
                                            </ul>
                </div>
            </div>
        </>
    )
}

export default MainNav;