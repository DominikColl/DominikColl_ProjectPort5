//export to export functions
import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import AlbumItem from '../Components/albumItem';
// export so it can be used in home 
export const artistClickk = async (artist) => {
    let collection=[];
    console.log('from infoArtist');
       ///2.0/?method=artist.getinfo&artist=Cher&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json();
        //if data results exist
        let r=await data;
        console.log(r);
}