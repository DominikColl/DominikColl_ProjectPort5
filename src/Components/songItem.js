import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
const artistItem = props => {
        return (
                <div>
                        <li><img src={props.img} alt='Song Img' /></li>
                        <li>
                                <Link className='link' to={"/song/" + props.id}>
                                        {props.songName}
                                </Link>
                        </li>
                        <li className='item'>Artist:{props.artistName}</li>
                        <li className='item'>Album:{props.albumName}</li>
                        <li className='item'>Plays: {parseFloat(props.plays).toLocaleString('en')}</li>

                        {/* <li className='item'>More info:{props.url}</li> */}

                </div>
        );
}

export default artistItem;