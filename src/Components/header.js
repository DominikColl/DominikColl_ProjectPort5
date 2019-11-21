import React from 'react';
import { MdSpeaker } from "react-icons/md";
import './style.css';
import { NavLink } from 'react-router-dom';

const header = props => {
    return (
        <nav id="nav">
            <h1 id='logo'> <NavLink id='navLink' to='/'> <MdSpeaker onClick={props.click} />MusicData</NavLink></h1>
        </nav>
    );
}
export default header;