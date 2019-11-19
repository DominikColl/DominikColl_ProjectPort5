import React from 'react';
import { FaHome } from "react-icons/fa";
import './style.css';
import { NavLink } from 'react-router-dom';

const header = props => {
    return (
        <nav id="nav">
            <h1 id='logo'> <NavLink to='/'> <FaHome onClick={props.click} /></NavLink></h1>
        </nav>
    );
}
export default header;