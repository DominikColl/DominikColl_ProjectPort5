import React from 'react';
import './style.css';

const artistItem = props => { 
    return (
       <div>
               <li><img src={props.img}/></li>
               <li>Song Name:{props.songName}</li>
               <li>Artist Name:{props.artistName}</li>
               <li>Plays:{props.plays}</li>
               <li>More info:{props.url}</li>
        
       </div>
      );
}

export default artistItem;