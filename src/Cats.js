import React from 'react';
import {Link} from 'react-router-dom';

const Cats = (props) => {
    return (
        <div>
            <h1>CATZzZ</h1>
            <ul>
                <li>
                    <Link to="/cats/stacey">Stacey</Link>
                </li>
                <li>
                    <Link to="cats/sasha">Sasha</Link>
                </li>
            </ul>
        </div>

    )
}

export default Cats;