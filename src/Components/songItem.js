import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
const artistItem = props => {
        return (
                <div>
                        <li><img src={props.img} /></li>
                        <li>
                                <Link to={"/song/" + props.id}>
                                        Song Name:{props.songName}
                                </Link>
                        </li>
                        <li class='item'>Artist Name:{props.artistName}</li>
                        <li class='item'>Plays:{props.plays}</li>
                        <li class='item'>More info:{props.url}</li>

                </div>
        );
}

export default artistItem;