import '../Tooltips/Tooltips.css';

/* tippy.js */
import React from 'react';
import Tippy from '@tippyjs/react/headless'; // different import path!

function Tooltips(props) {
    return (
        <Tippy render={attrs => ( <div className="box" tabIndex="-1" {...attrs}> <p>{props.value}</p><div id="arrow" data-popper-arrow></div></div>)}>
            {props.children}
        </Tippy>
    );
}

export default Tooltips;
