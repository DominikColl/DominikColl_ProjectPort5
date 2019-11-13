import React from 'react';
import './style.css';

const albumItem = props => { 
    return (
       <div>
               <li><img src={props.img}/></li>
               <li>Album Name:{props.albumName}</li>
               <li>Artist Name:{props.artist}</li>
               <li>More info:{props.url}</li>
          
       </div>
      );
}

export default albumItem;