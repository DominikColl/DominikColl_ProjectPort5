import React from 'react';


const artistItem = props => { 
    return (
       <div>
               <li><img src={props.img}/></li>
               <li class='item'onClick={props.click} >Artist Name:{props.name}</li>
               <li class='item'id='artistItem'>Followers:{props.followers}</li>
               <li class='item'id='artistItem'>More Info:{props.url}</li>
       </div>
      );
}

export default artistItem;