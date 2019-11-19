import React from 'react';
import Button from './Button';
import { FaSearch } from "react-icons/fa";
import './style.css';
const form = props => {
    return (
        <div>
            <form onSubmit={props.click}>
                <div id='fDiv'>
                    {/* <h2>Search</h2> */}
                    {/* changes based off of state */}
                    <h2>Filtering: {props.filter}</h2>
                    <input type='text' placeholder='Search your favorite songs,albums, or artist'></input>
                    {/* hide this input so form submits when user hits enter */}
                    <input id='hideThis' type='submit' />
                    <Button string={<FaSearch />} onClick={props.click} />
                </div>
                <h2>Choose filter for search</h2>
                <ul id='formButCon'>
                    {/* passing onClick event to be placed in page */}
                    {/* using id as identifier in js */}
                    <li><button class='formBut' onClick={props.btnClick} type='button' id='Artist'>Artist</button></li>
                    <li><button class='formBut' onClick={props.btnClick} type='button' id='Song'>Song</button></li>
                    <li><button class='formBut' onClick={props.btnClick} type='button' id='Album'>Album</button></li>
                </ul>
            </form>
        </div>
    );
}

export default form;