import React from 'react';
import Button from './Button';
import { FaSearch } from "react-icons/fa";
import './style.css';
const form = props => { 
    return (
        <div>
        <form> 
        <div id='fDiv'>
        <h2>Search</h2>
            <input type='text' placeholder='Search your favorite songs,albums, or artist'></input>
             <Button string={<FaSearch/>} onClick={props.click}/>
             </div>
            <h2>Must choose button to filter search </h2>
            <ul id='formButCon'>
            {/* passing onClick event to be placed in page */}
                <li><button class='formBut' onClick={props.btnClick} type='button' id='artistButton'>Artist</button></li>
                <li><button class='formBut' onClick={props.btnClick}type='button' id='songButton'>Song</button></li>
                <li><button class='formBut' onClick={props.btnClick}type='button' id='albumButton'>Album</button></li>
            </ul>
        </form>
        </div>
      );
}

export default form;