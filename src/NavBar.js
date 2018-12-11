import React from 'react';
import {
    Link
} from 'react-router-dom';

const NavBar = (props) => {
    return (
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>

            <Link to="/cats">Cats</Link>
            <ul>
                <li>
                    <Link to ="/cats/stacey">Stacey</Link>
                </li>
                <li>
                    <Link to="cats/sasha">Sasha</Link>
                </li>
            </ul>
        </li>

      </ul>
    )
}

export default NavBar;