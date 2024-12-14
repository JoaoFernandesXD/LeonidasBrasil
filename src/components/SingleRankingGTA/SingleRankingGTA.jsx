import '../SingleRankingGTA/SingleRankingGTA.css';

import { FaCalendar } from "react-icons/fa";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaStop } from "react-icons/fa";


/* tippy.js */
import Tippy from '@tippyjs/react/headless';


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
                            <Tippy render={attrs => ( <div className="box" tabIndex="-1" {...attrs}> <p>{props.downloads} de vendas</p><div id="arrow" data-popper-arrow></div></div>)}><h5><IoCloudDownloadSharp />{props.downloads}</h5></Tippy>
                        </div>
                        <div className='container__info__tag'>
                            <Tippy render={attrs => ( <div className="box" tabIndex="-1" {...attrs}> <p>Lançado no ano de {props.years}</p><div id="arrow" data-popper-arrow></div></div>)}><h5><FaCalendar />{props.years}</h5></Tippy>
                        </div>
                        <div className='container__info__tag'>
                            <Tippy render={attrs => ( <div className="box" tabIndex="-1" {...attrs}> <p>stable</p><div id="arrow" data-popper-arrow></div></div>)}><h5><FaStop />stable</h5></Tippy>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default SingleRankingGTA;