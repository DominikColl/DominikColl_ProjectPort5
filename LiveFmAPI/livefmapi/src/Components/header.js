import React from 'react';
import { FaHome } from "react-icons/fa";
import './style.css';
const header = props => { 
    return (
        <nav>
            <h1 id='logo'><FaHome/></h1>
        </nav>
      );
}

export default header;