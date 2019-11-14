import React from 'react';
import './style.css';

const albumItem = props => { 
    return (
       <div>
               <li><img src={props.img}/></li>
               
               <li class='item'>Album Name:{props.albumName}</li>
               <li class='item'>Artist Name:{props.artist}</li>
               
               <li class='item'>More info:{props.url}</li>
          
       </div>
      );
}

export default albumItem;