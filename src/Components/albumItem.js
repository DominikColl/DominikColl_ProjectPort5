import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'

const albumItem = props => { 
    return (
       <div>
               <li><img src={props.img}/></li>
               
               <li class='item'>
               <Link to={"/album/" + props.id}>
                Album Name:{props.albumName}
               </Link>
               </li>
               <li class='item'>Artist Name:{props.artist}</li>
               
               <li class='item'>
                         More info:{props.url}
               </li>
          
       </div>
      );
}

export default albumItem;