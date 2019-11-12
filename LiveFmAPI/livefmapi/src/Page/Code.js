//export to export functions
import {NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import AlbumItem from '../Components/albumItem';
export function test(){
    console.log('test fron code');
}

export const fetchAlbum = async (value) => {
    let collection=[];
        console.log(value);
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json();
        //if data results exist
        if(data.results){
            let t= await data.results;
            console.log(t.albummatches);
          //this is gonna be a problem
          for(let i=0;i<9;i++){
             collection.push(t.albummatches.album[i]);
           }
          //collection=data.results.albummatches.album;
           console.log(collection);
          //  this.setState({collection});
          console.log('exist');
          console.log(data.results.albummatches.album[0]);
        //   collection.map((e,i)=>{
        //      return <NavLink to='/MoreInfo'><AlbumItem albumName={e.name} artist={e.artist} url={e.url}/></NavLink>
        //   })
         return collection;
          
}
}