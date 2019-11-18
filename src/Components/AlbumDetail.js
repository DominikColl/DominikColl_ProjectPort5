import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadAlbumDetail } from '../Page/Code'
import './style.css';
import Header from './header';
const AlbumDetail = (props) => {

  let { albumId } = useParams();
  //artist playcount published summary tracksonalbum
  let [albumData, setAlbumData] = useState({})
  let [artist, setArtist] = useState('')
  let [playCount, setPlayCount] = useState('')
  let [published, setPublished] = useState('')
  let [summary, setSummary] = useState('')
  let [tracks, setTracks] = useState([])

  useEffect(() => {
    console.log(albumId);
    loadAlbumDetail(albumId).then((d) => {
      setAlbumData(d.album);
      setArtist(d.album.artist);
      setPlayCount(d.album.playCount);
      setPublished(d.album.wiki.published);
      setSummary(d.album.wiki.summary);
      setTracks(d.album.tracks.track)
      console.log(d.album);
    })
  }, [albumId])


  let fillTracks = tracks.map((e, i) => {
    return <li> {e.name}</li>;
  })
  return (
    <div class='moreDetail'>
      <Header />
      <h1>I am Album Detail.</h1>
      <p>{albumId}</p>
      <ul>
        <li>{albumData.name}</li>
        <li>{artist}</li>
        <li>{playCount}</li>
        <li>{published}</li>
        <li>{summary}</li>
        {fillTracks}
      </ul>
    </div>
  )
}

export default AlbumDetail