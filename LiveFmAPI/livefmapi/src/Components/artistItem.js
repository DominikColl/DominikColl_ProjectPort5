import React from 'react';


const artistItem = props => { 
    return (
       <div>
               <li id='artistItem'>Artist Name:{props.name}</li>
               <li id='artistItem'>Followers:{props.followers}</li>
               <li id='artistItem'>More Info:{props.url}</li>
       </div>
      );
}

export default artistItem;