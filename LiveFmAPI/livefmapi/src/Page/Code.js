//export to export functions
import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import AlbumItem from '../Components/albumItem';
// export so it can be used in home 
export const moreInfoAlbum = async (value) => {
    let collection=[];
        console.log(value);
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json();
        //if data results exist
        if(data.results){
            let t= await data.results;
            console.log(t);
          
}
}