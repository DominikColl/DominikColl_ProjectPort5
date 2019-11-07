import React, { Component } from 'react';
import Form from '../Components/form';
import Items from '../Components/items';
class Home extends Component {
    state = { search:'',name:'name',other:'other',filter:'', }
   
    async fetchAlbum(value){
        console.log(value);
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data.results);
        //if data results exist
        if(data.results){
          console.log('exist');
          console.log(data.results.albummatches.album[0]);
          let name=data.results.albummatches.album[0].name;
          let other='Artist: '+data.results.albummatches.album[0].artist;
          this.setState({name});
          this.setState({other});
        }
    
      }
      //fetch song
      // /2.0/?method=track.search&track=Believe&api_key=YOUR_API_KEY&format=json
      //add artist name
      async fetchSong(value){
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
        if(data.results){
          console.log('exist');
          console.log(data.results.trackmatches.track[0]);
          let name=data.results.trackmatches.track[0].name;
          let other='Listeners: '+data.results.trackmatches.track[0].listeners;
          this.setState({name});
          this.setState({other});
        }
      }
      async fetchArtist(value){
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
        if(data.results){
          console.log('exist');
          console.log(data.results.artistmatches.artist[0]);
          let name=data.results.artistmatches.artist[0].name;
          let other='Listeners: '+data.results.artistmatches.artist[0].listeners;
          this.setState({name});
          this.setState({other});
        }
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
      //only for debugging never called
      fetch=(searchQuery)=>{
        // this.fetchArtist();
        // this.fetchTopArtist();
        // this.fetchTopTracks();
        this.fetchAlbum(searchQuery);
       
      }
      click=()=>{
          console.log(this.state.filter);
            let search=document.querySelector('input').value;
            //console.log(search);
            this.setState({search});
            if(this.state.filter==='albumButton'){
              // console.log('fetching album');
              this.fetchAlbum(search);
            }else if(this.state.filter==='artistButton'){
              // console.log('fetching artist');
              this.fetchArtist(search);
            }else if(this.state.filter==='songButton'){
              // console.log('fetching song');
              this.fetchSong(search);
            }
     }
     btnClick=(e)=>{
       let filter=e.target.id;
       this.setState({filter});
       console.log(filter); 
     }
    render() { 
        return ( 
          <div>
            <Form btnClick={this.btnClick}click={this.click}/>
            <Items name={this.state.name} other={this.state.other}/>
            </div>
         );
    }
}
 
export default Home;