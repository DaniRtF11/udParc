/* Boton.jsx */

import React from 'react';

const Boton = ({text}) => {
    return (
        <div className="menuDiv">
            <div className="menuOp">
                <li className="menuOpcion">
                    <p className='font-semibold'>{text}</p>
                </li>
            </div>
        </div>
    )
}

export default Boton;