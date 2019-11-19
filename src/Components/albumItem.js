import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

const albumItem = props => {
        return (
                <div>
                        <li><img src={props.img} alt='Album Img' /></li>

                        <li className='item'>
                                <Link to={"/album/" + props.id}>
                                        Album Name:{props.albumName}
                                </Link>
                        </li>
                        <li className='item'>Artist Name:{props.artist}</li>

                        <li className='item'>
                                More info:{props.url}
                        </li>

                </div>
        );
}

export default albumItem;