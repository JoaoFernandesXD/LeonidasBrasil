import '../SingleCardNews/SingleCardNews.css';
import Tooltips from '../Tooltips/Tooltips';



function SingleCardNews(props){
    return(
        <div className='container__card_news'>
            <div className='container__card__news__info'>
                <div className='list_card_tag'>
                    <div className='card__news__tag'>
                        <Tooltips value={props.categoria}><p>{props.categoria}</p></Tooltips>
                    </div>
                </div>
                <h2 class="container__title__article"><a href="#">{props.titulo}</a></h2>
            </div>
            <img src={props.image}></img>
        </div>
    )
}


export default SingleCardNews;