import React from 'react';


const artistItem = props => { 
    return (
       <div>
           <ul>
               <li>Artist Name:{props.name}</li>
               <li>Followers:{props.followers}</li>
               <li>More Info:{props.url}</li>
           </ul>
       </div>
      );
}

export default artistItem;