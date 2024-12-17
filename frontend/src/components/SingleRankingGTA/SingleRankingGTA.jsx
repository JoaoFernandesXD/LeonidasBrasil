import '../SingleRankingGTA/SingleRankingGTA.css';

import { FaCalendar } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaStop } from "react-icons/fa";


import Tooltips from '../Tooltips/Tooltips';



function SingleRankingGTA(props){
    return(
        <div className='container__single_gta'>
                <div className='container_row'>
                    <img src={props.image}></img>
                </div>
                <div className='info__single__gta'>
                    <p>{props.name}</p>
                    <div className='info__single__tag'>
                        <div className='container__info__tag'>
                           <Tooltips value={`${props.downloads} de vendas`}><h5><IoCloudDownloadSharp />{props.downloads}</h5></Tooltips>
                        </div>
                        <div className='container__info__tag'>
                            <Tooltips value={`Lançado no ano de ${props.years}`}><h5><FaCalendar />{props.years}</h5></Tooltips>
                        </div>
                        <div className='container__info__tag'>
                            <Tooltips value="stable"><h5><FaStop />stable</h5></Tooltips>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default SingleRankingGTA;