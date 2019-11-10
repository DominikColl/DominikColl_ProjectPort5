import React from 'react';


const albumItem = props => { 
    return (
       <div>
           <ul>
               <li>Album Name:{props.albumName}</li>
               <li>Artist Name:{props.artist}</li>
               <li>More info:{props.url}</li>
           </ul>
       </div>
      );
}

export default albumItem;