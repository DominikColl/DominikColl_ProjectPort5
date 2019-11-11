import React, { Component } from 'react';
import Form from '../Components/form';
import AlbumItem from '../Components/albumItem';
import SongItem from '../Components/songItem';
import ArtistItem from '../Components/artistItem';
import TopCharts from '../Components/topChartsItem';
class Home extends Component {
    state = { search:'',name:'name',other:'other',filter:'',collection:[],topTracks:[] }
    componentDidMount() {
      this.fetchTopTracks();
     console.log('test f');
    }
    async fetchAlbum(value){
        let collection;
        console.log(value);
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        //if data results exist
        if(data.results){
          // for(let i=0;i<20;i++){
          //    collection.push(data.results.albummatches.album[i]);
          //  }
          collection=data.results.albummatches.album;
           console.log(collection);
           this.setState({collection});
          console.log('exist');
          console.log(data.results.albummatches.album[0]);
          let name=data.results.albummatches.album[0].name;
          let other='Artist: '+data.results.albummatches.album[0].artist;
          this.setState({name});
          this.setState({other});
        }
    
      }
   
      async fetchSong(value){
        let collection=[];
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
        if(data.results){
          for(let i=0;i<20;i++){
            // console.log(data.results.albummatches.album[i]);
             collection.push(data.results.trackmatches.track[i]);
           }
           console.log(collection);
           this.setState({collection});
          console.log('exist');
          console.log(data.results.trackmatches.track[0]);
          let name=data.results.trackmatches.track[0].name;
          let other='Listeners: '+data.results.trackmatches.track[0].listeners;
          this.setState({name});
          this.setState({other});
        }
      }
      async fetchArtist(value){
        let collection=[];
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
        console.log(data);
        if(data.results){
          for(let i=0;i<10;i++){
             collection.push(data.results.artistmatches.artist[i]);
           }
           console.log(collection);
           this.setState({collection});
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
       async fetchTopTracks(){
         let topTracks=[];
        const res=await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
        const data=await res.json()
       // console.log(data);
        for(let i=0;i<10;i++){
          topTracks.push(data.tracks.track[i]);
        }
        console.log('from top charts collection');
      //  console.log(collection)
        this.setState({topTracks});
       // return collection;
      }
      fetch=(searchQuery)=>{
        this.fetchAlbum(searchQuery);
      }
      
      click=()=>{
         this.fetchTopTracks();
          console.log(this.state.filter);
            let search=document.querySelector('input').value;
            this.setState({search});
            if(this.state.filter==='albumButton'){
              this.fetchAlbum(search);
            }else if(this.state.filter==='artistButton'){
              this.fetchArtist(search);
            }else if(this.state.filter==='songButton'){
              this.fetchSong(search);
            }
     }
     btnClick=(e)=>{
       let filter=e.target.id;
       this.setState({filter});
       console.log(filter); 
     }
    render() { 
     let fillContent=this.state.collection.map((e,i)=>{
       if(this.state.filter==='artistButton'){
        return <ArtistItem name={e.name} followers={e.listeners} url={e.url}/>
       }else if(this.state.filter==='albumButton'){
         return <AlbumItem albumName={e.name} artist={e.artist} url={e.url}/>
       }else if(this.state.filter==='songButton'){
        return <SongItem songName={e.name} artistName={e.artist} plays={e.listeners} url={e.url}/>
      }
     })
        return ( 
          <div>
            <Form btnClick={this.btnClick}click={this.click}/>
            {fillContent}
            {/* {this.displayTopTracks()} */}
          </div>
         );
    }
}
 
export default Home;