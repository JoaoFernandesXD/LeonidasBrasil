import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Tooltips(props) {
    return (
        <Tippy
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <p>{props.value} {props.text}</p>
                    <div id="arrow" data-popper-arrow></div>
                </div>
            )}
        >
            {props.children} {/* Renderiza o botão ou qualquer outro elemento passado como filho */}
        </Tippy>
    );
}

export default Tooltips;
