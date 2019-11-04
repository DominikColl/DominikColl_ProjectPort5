import React from 'react';


const items = props => { 
    return (
       <div>
           <ul>
               <li>{props.name}</li>
               <li>{props.artist}</li>
           </ul>
       </div>
      );
}

export default items;