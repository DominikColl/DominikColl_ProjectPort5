import React from 'react';
import './style.css';

const albumItem = props => { 
    return (
       <div  id='t'>
               <li><img src={props.img}/></li>
               <div onClick={props.click}>
               <li >Album Name:{props.albumName}</li>
               <li>Artist Name:{props.artist}</li>
               </div>
               <li>More info:{props.url}</li>
          
       </div>
      );
}

export default albumItem;