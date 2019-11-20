import React, { Component } from 'react';
import Form from '../Components/form';
import AlbumItem from '../Components/albumItem';
import SongItem from '../Components/songItem';
import ArtistItem from '../Components/artistItem';
import Header from '../Components/header';
import '../Components/style.css';
//modal lib
import swal from 'sweetalert';

//project built using livefm api and spotify/youtube playback
// Reacticons used and css Reset came from http://meyerweb.com/eric/tools/css/reset/ 
class Home extends Component {
  //state 
  state = { search: '', name: 'name', other: 'other', filter: 'Album', collection: [], topTracks: [], current: [], bigCollection: [] }
  //happens when all compents load in
  componentDidMount() {
    // this.fetchTopTracks();
    console.log('test f');
  }

  //fetchs album based of search value
  async fetchAlbum(value) {
    //collection to be set to state later in fucntion
    let collection = [];

    console.log(value);
    //removed http for cors issue github pages
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    //if data results exist
    if (data.results) {
      //this is gonna be a problem
      for (let i = 0; i < 9; i++) {
        collection.push(data.results.albummatches.album[i]);
      }
      //collection=data.results.albummatches.album;
      console.log(collection);
      //setting state
      this.setState({ collection });
      console.log('exist');
      console.log(data.results.albummatches.album[0]);
      return collection;

    }
  }
  //fetchs song based of search value
  async fetchSong(value) {
    let collection = [];
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    console.log(data);
    if (data.results) {
      for (let i = 0; i < 20; i++) {
        collection.push(data.results.trackmatches.track[i]);
      }
      console.log(collection);
      this.setState({ collection });
      return collection;
    }
  }
  //fetchs artist based on search value
  async fetchArtist(value) {
    let collection = [];

    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    console.log(data);
    if (data.results) {
      for (let i = 0; i < 9; i++) {
        collection.push(data.results.artistmatches.artist[i]);
      }
      console.log(collection);
      this.setState({ collection });
      return collection;
    }
  }
  //fetchs most popular artist
  async fetchTopArtist() {
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    console.log(data);
  }
  //fetchs most popular tracks
  async fetchTopTracks() {
    let topTracks = [];
    const res = await fetch(`//ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    // console.log(data);
    for (let i = 0; i < 9; i++) {
      topTracks.push(data.tracks.track[i]);
    }
    console.log('from top charts collection');
    //  console.log(collection)
    this.setState({ topTracks });
    // return collection;
  }

  //click function that will happen when form is submitted
  //checks filter if fetching song artist or album the triggers fucntion to fetch data
  click = () => {
    this.fetchTopTracks();
    console.log(this.state.filter);
    //grabbing input value 
    let search = document.querySelector('input').value;
    this.setState({ search });
    //checking filter/button pressed
    if (this.state.filter === 'Album') {
      this.fetchAlbum(search);
    } else if (this.state.filter === 'Artist') {
      this.fetchArtist(search);
    } else if (this.state.filter === 'Song') {
      this.fetchSong(search);
      //if filter is not set run all three and return value into big Collection
    } else if (this.state.filter === '') {
      // modal popup if filter is not selected
      swal({ icon: 'warning', text: "To use the app to its full potential choose a filter" });
      let bigCollection = [];
      bigCollection.push(this.fetchAlbum(search));
      bigCollection.push(this.fetchArtist(search));
      bigCollection.push(this.fetchSong(search));
      this.setState({ bigCollection })
    }
  }
  //happens when filter button is clicked will be set using id of button clicked
  btnClick = (e) => {
    let filter = e.target.id;
    this.setState({ filter });
    console.log(filter);
  }
  //I CANT GET VALUE INSIDE OF LI OR ANYTHING NEEDED FROM TARGETING A COMPENTNT
  artistClick = (e) => {
    console.log(e.target.id);

    //artistClickk();
  }

  //  returns home and clears input fields when escape hatch is clicked
  homeClick = () => {
    let collection = [];
    document.querySelector('input').value = '';
    this.setState({ collection });
  }

  render() {
    //filling content based off what the filter is getting data from collection in state set when fetching data 
    let fillContent = this.state.collection.map((e, i) => {
      console.log(e);
      //checking filter and only displaying items with a mbid 
      if (this.state.filter === 'Artist') {
        if (e.mbid) {
          // calling component based on search filter
          return <ArtistItem key={i} id={e.mbid} click={this.artistClick} img={e.image[2]['#text']} name={e.name} followers={e.listeners} url={e.url} />
        }
      } else if (this.state.filter === 'Album') {
        if (e.mbid) {
          return <AlbumItem key={i} id={e.mbid} img={e.image[2]['#text']} albumName={e.name} artist={e.artist} url={e.url} />
        }
      } else if (this.state.filter === 'Song') {
        if (e.mbid) {
          return <SongItem key={i} img={e.image[2]['#text']} id={e.mbid} songName={e.name} artistName={e.artist} plays={e.listeners} url={e.url} />
        }
      } else if (this.state.filter === '') {
        console.log(e);
        // if no filter return what is returned by all three
        return <div key={i}><img src={e.image[2]['#text']} alt='Search related img' /><li>{e.name}</li> <li>{e.artist}</li></div>
      }
      return '';
    })
    return (
      <div>
        {/* calling imported component setting props */}
        <Header click={this.homeClick} />
        <Form btnClick={this.btnClick} filter={this.state.filter} click={this.click} />
        {/* {modal} */}
        <ul id='listCon'>
          {/* calling function to map through collection*/}
          {fillContent}
        </ul>
      </div>
    );
  }
}

export default Home;