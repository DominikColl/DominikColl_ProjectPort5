import React from 'react';
import { FaHome } from "react-icons/fa";
import './style.css';
import {NavLink} from 'react-router-dom';

const header = props => { 
    return (
        <nav id="nav">
           <NavLink to='/'> <h1 id='logo'><FaHome onClick={props.click}/></h1></NavLink>
        </nav>
      );
}
export default header;