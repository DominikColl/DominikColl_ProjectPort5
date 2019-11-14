import React from 'react';
import './style.css';

const artistItem = props => { 
    return (
       <div>
               <li><img src={props.img}/></li>
               <li class='item'>Song Name:{props.songName}</li>
               <li class='item'>Artist Name:{props.artistName}</li>
               <li class='item'>Plays:{props.plays}</li>
               <li class='item'>More info:{props.url}</li>
        
       </div>
      );
}

export default artistItem;