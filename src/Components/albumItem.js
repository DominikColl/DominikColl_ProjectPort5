import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

const albumItem = props => {
        return (
                <div>
                        <li><img src={props.img} alt='Album Img' /></li>

                        <li className='item'>
                                <Link className='link' to={"/album/" + props.id}>
                                        {props.albumName}
                                </Link>
                        </li>
                        <li className='item'>Artist: {props.artist}</li>

                        {/* <li className='item' id='itemUrl'>
                                More info:{props.url}
                        </li> */}

                </div>
        );
}

export default albumItem;