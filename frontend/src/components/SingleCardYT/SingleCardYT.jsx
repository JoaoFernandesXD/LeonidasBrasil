import '../SingleCardYT/SingleCardYT.css';
import '../SingleCardNews/SingleCardNews.css';
import Tooltips from '../Tooltips/Tooltips';


function SingleCardYT(props){
    return(
        <div className='container__card_news'>
            <div className='container__card__news__info'>
                <div className='list_card_tag'>
                    <div className='card__news__tag'>
                        <Tooltips value={props.categoria}><p>{props.categoria}</p></Tooltips>
                    </div>
                </div>
                <h2 className="container__title__article"><a href="#">{props.titulo}</a></h2>
            </div>
            <iframe width="100%" height="100%" src={props.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default SingleCardYT;