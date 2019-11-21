import React from 'react';
import { Link } from 'react-router-dom';

const artistItem = props => {
        return (
                <div>
                        <li><img src={props.img} alt='Artist Img' /></li>
                        <li>
                                <Link className='link' to={"/artist/" + props.id}>
                                        {props.name}
                                </Link>
                        </li>
                        <li className='item' id='artistItem'>Followers:{parseFloat(props.followers).toLocaleString('en')}</li>

                        {/* <li className='item' id='artistItem'>More Info:{props.url}</li> */}
                </div>
        );
}

export default artistItem;