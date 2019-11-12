import React from 'react';
import Button from './Button';
import { FaSearch } from "react-icons/fa";
import './style.css';
const form = props => { 
    return (
        <div >
        <form> 
        <h2>Search</h2>
            <input type='text'></input>
             <Button string={<FaSearch/>} onClick={props.click}/>
            <h2>Must choose button to filter search </h2>
            <ul id='formButCon'>
                {/* will switch to button component */}
                <li><button id='formBut' onClick={props.btnClick} type='button' id='artistButton'>Artist</button></li>
                <li><button id='formBut' onClick={props.btnClick}type='button' id='songButton'>Song</button></li>
                <li><button id='formBut'  onClick={props.btnClick}type='button' id='albumButton'>Album</button></li>
            </ul>
            
        </form>
        </div>
      );
}

export default form;