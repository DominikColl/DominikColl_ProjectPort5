import React from 'react';
import { FaHome } from "react-icons/fa";
import './style.css';
import {NavLink} from 'react-router-dom';

const header = props => { 
    return (
        <nav id="nav">
           <NavLink to='/Home'> <h1 id='logo'><FaHome/></h1></NavLink>
        </nav>
      );
}
export default header;