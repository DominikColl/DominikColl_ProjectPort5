import React, { Component } from 'react';
import Form from '../Components/form';
import AlbumItem from '../Components/albumItem';
import SongItem from '../Components/songItem';
import ArtistItem from '../Components/artistItem';
import TopCharts from '../Components/topChartsItem';
import Header from '../Components/header';
import { NavLink } from 'react-router-dom';
import '../Components/style.css';
import { artistClickk } from '../Page/Code';

//project built using livefm api and spotify/youtube playback
// Reacticons used and css Reset came from http://meyerweb.com/eric/tools/css/reset/ 
class Home extends Component {
  //state 
  state = { search: '', name: 'name', other: 'other', filter: '', collection: [], topTracks: [], current: [] }
  //happens when all compents load in
  componentDidMount() {
    // this.fetchTopTracks();
    console.log('test f');
  }

  //fetchs album based of search value
  async fetchAlbum(value) {
    let collection = [];
    console.log(value);
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    //if data results exist
    if (data.results) {
      //this is gonna be a problem
      for (let i = 0; i < 9; i++) {
        collection.push(data.results.albummatches.album[i]);
      }
      //collection=data.results.albummatches.album;
      console.log(collection);
      this.setState({ collection });
      console.log('exist');
      console.log(data.results.albummatches.album[0]);
      return collection;

    }
  }
  //fetchs song based of search value
  async fetchSong(value) {
    let collection = [];
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    console.log(data);
    if (data.results) {
      for (let i = 0; i < 20; i++) {
        collection.push(data.results.trackmatches.track[i]);
      }
      console.log(collection);
      this.setState({ collection });
      return collection;
      console.log('exist');
      console.log(data.results.trackmatches.track[0]);
      let name = data.results.trackmatches.track[0].name;
      let other = 'Listeners: ' + data.results.trackmatches.track[0].listeners;
      this.setState({ name });
      this.setState({ other });
    }
  }
  //fetchs artist based on search value
  async fetchArtist(value) {
    let collection = [];
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${value}&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    console.log(data);
    if (data.results) {
      for (let i = 0; i < 9; i++) {
        collection.push(data.results.artistmatches.artist[i]);
      }
      console.log(collection);
      this.setState({ collection });
      return collection;
      console.log('exist');
      console.log(data.results.artistmatches.artist[0]);
      let name = data.results.artistmatches.artist[0].name;
      let other = 'Listeners: ' + data.results.artistmatches.artist[0].listeners;
      this.setState({ name });
      this.setState({ other });
    }
  }
  //fetchs most popular artist
  async fetchTopArtist() {
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    console.log(data);
  }
  //fetchs most popular tracks
  async fetchTopTracks() {
    let topTracks = [];
    const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=77730a79e57e200de8fac0acd06a6bb6&format=json`)
    const data = await res.json()
    // console.log(data);
    for (let i = 0; i < 9; i++) {
      topTracks.push(data.tracks.track[i]);
    }
    console.log('from top charts collection');
    //  console.log(collection)
    //  this.setState({topTracks});
    // return collection;
  }

  //click function that will happen when form is submitted
  //checks filter if fetching song artist or album the triggers fucntion to fetch data
  click = () => {
    this.fetchTopTracks();
    console.log(this.state.filter);
    let search = document.querySelector('input').value;
    this.setState({ search });
    if (this.state.filter === 'albumButton') {
      this.fetchAlbum(search);
    } else if (this.state.filter === 'artistButton') {
      this.fetchArtist(search);
    } else if (this.state.filter === 'songButton') {
      this.fetchSong(search);
    } else if (this.state.filter === '') {
      this.fetchAlbum(search);
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

  //  returns home and clears input fields
  homeClick = () => {
    let collection = [];
    document.querySelector('input').value = '';
    this.setState({ collection });
  }
  //<NavLink onClick={this.itemClick} to='/MoreInfo'><AlbumItem img={e.image[2]['#text']} albumName={e.name} artist={e.artist} url={e.url}/></NavLink>
  render() {
    //filling content based off what the filter is getting data from collection in state set when fetching data 
    let fillContent = this.state.collection.map((e, i) => {
      console.log(e);
      if (this.state.filter === 'artistButton') {
        return <li id={i} to='/MoreInfo'><ArtistItem id={i} id={e.mbid} click={this.artistClick} img={e.image[2]['#text']} name={e.name} followers={e.listeners} url={e.url} /></li>
      } else if (this.state.filter === 'albumButton') {
        return <li id='albumId' onClick={((e) => this.artistClick(e))} ><AlbumItem id={e.mbid} img={e.image[2]['#text']} albumName={e.name} artist={e.artist} url={e.url} /></li>
      } else if (this.state.filter === 'songButton') {
        return <li onClick={this.trackClick} to='/MoreInfo'><SongItem img={e.image[2]['#text']} id={e.mbid} songName={e.name} artistName={e.artist} plays={e.listeners} url={e.url} /></li>
      }
    })
    return (
      <div>
        <Header click={this.homeClick} />
        <Form btnClick={this.btnClick} click={this.click} />
        <ul id='listCon'>
          {/* calling function */}
          {fillContent}
        </ul>

        {/* <Route exact path='/MoreInfo' render={()=>MoreInfo}/>
           <Route exact path= '/' component={Home}/>
                <Route exact path='/Home' component={Home}/> */}
      </div>
    );
  }
}

export default Home;