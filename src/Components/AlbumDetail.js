import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadAlbumDetail } from '../Page/Code'
import './style.css';
import Header from './header';
const AlbumDetail = () => {
  //states
  let { albumId } = useParams();
  //artist playcount published summary tracksonalbum
  let [albumData, setAlbumData] = useState({ wiki: {} })
  let [artist, setArtist] = useState('')
  let [playCount, setPlayCount] = useState('')
  let [published, setPublished] = useState('')
  let [summary, setSummary] = useState('')
  let [tracks, setTracks] = useState([])
  let [albumImg, setAlbumImg] = useState([])

  useEffect(() => {
    console.log(albumId);
    loadAlbumDetail(albumId).then((d) => {
      //getting data setting states
      setAlbumData(d.album);
      setArtist(d.album.artist);
      setPlayCount(d.album.playcount);
      if (d.album.wiki) {
        setPublished(d.album.wiki.published);
        setSummary(d.album.wiki.summary);
      }
      setTracks(d.album.tracks.track);
      setAlbumImg(d.album.image[3]['#text']);
      console.log(d.album);
    })
  }, [albumId])

  //looping through tracks on album to display
  let fillTracks = tracks.map((e, i) => {
    return <li key={i}> {e.name}</li>;
  })
  return (

    <div className='moreDetail'>
      {/* {console.log(albumData.wiki.published)} */}
      <Header />
      {/* <h1>I am Album Detail.</h1>
      <p>{albumId}</p> */}
      <ul className='detailList'>
        <div className='imgCon'>
          <img src={albumImg} alt='Album Img' />
          <li><h1>{albumData.name}</h1></li>
        </div>
        <li><h2>By {artist}</h2></li>
        {/* toLocaleString will format long numbers to make them readable very cool */}
        <li><h2>Plays</h2> {parseFloat(playCount).toLocaleString('en')}</li>
        <li><h2>Release Date</h2> {published}</li>
        <li className='bio'> {summary}</li>
        <h2>Tracks</h2>
        {fillTracks}
      </ul>
    </div>
  )
}

export default AlbumDetail