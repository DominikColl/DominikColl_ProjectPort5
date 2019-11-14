import React from 'react';


const topChartsItem = props => { 
    return (
       <div>
           <ul>
               <li>Song name:{props.songName}</li>
               <li>Artist Name:{props.artist}</li>
               <li>Play Count:{props.playCount}</li>
               <li>Followers:{props.followers}</li>
               <li>More info:{props.url}</li>
           </ul>
       </div>
      );
}

export default topChartsItem;