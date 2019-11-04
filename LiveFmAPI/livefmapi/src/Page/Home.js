import React, { Component } from 'react';
import Form from '../Components/form';
import Items from '../Components/items';
class Home extends Component {
    state = { search:'',name:'name',artist:'artist', }
   
    async fetchAlbum(value){
        console.log(value);
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data.results);
        if(data.results){
          console.log('exist');
          console.log(data.results.albummatches.album[0]);
          let name=data.results.albummatches.album[0].name;
          let artist=data.results.albummatches.album[0].artist;
          this.setState({name});
          this.setState({artist});
        }
    
      }
      async fetchArtist(){
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Drake&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
      }
      async fetchTopArtist(){
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
      }
    //   chart.gettoptracks
       async fetchTopTracks(){
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
      }
      //I can get weekly data as well¸
      //some inputs are hardcoded
      fetch=()=>{
        // this.fetchArtist();
        // this.fetchTopArtist();
        // this.fetchTopTracks();
        this.fetchAlbum(this.state.search);
       
      }
      click=()=>{
            let search=document.querySelector('input').value;
            console.log(search);
            this.setState({search});
            this.fetch();
         //t.value='';
     }
    render() { 
        return ( 
          <div>
            <Form click={this.click}/>
            <Items name={this.state.name} artist={this.state.artist}/>
            </div>
         );
    }
}
 
export default Home;