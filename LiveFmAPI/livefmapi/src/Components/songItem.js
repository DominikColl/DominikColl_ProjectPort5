import React from 'react';


const artistItem = props => { 
    return (
       <div>
           <ul>
               <li>Song Name:{props.songName}</li>
               <li>Artist Name:{props.artistName}</li>
               <li>Plays:{props.plays}</li>
               <li>More info:{props.url}</li>
           </ul>
       </div>
      );
}

export default artistItem;