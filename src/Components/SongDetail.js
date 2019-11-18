import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadSongDetail } from '../Page/Code'
import './style.css';
import Header from './header'

const SongDetail = (props) => {

    let { songId } = useParams();

    let [songData, setSongData] = useState([])
    let [artistName, setArtistName] = useState('');
    let [albumTitle, setAlbumTitle] = useState('');
    let [playCount, setPlayCount] = useState('');
    let [songBio, setSongBio] = useState('');
    useEffect(() => {
        console.log(songId);
        loadSongDetail(songId).then((d) => {
            console.log(d.track);
            setSongData(d.track);
            setArtistName(d.track.artist.name);
            setAlbumTitle(d.track.album.title);
            setPlayCount(d.track.playcount);
            setSongBio(d.track.wiki.summary);
            console.log(d.track.artist.name);
        }).then((e) => {
            console.log(songData);
        })

    }, [songId])
    return (
        <div class='moreDetail'>
            <Header />
            <h1>I am Album Detail.</h1>
            <p>{songId}</p>
            <ul>
                {/* name artist release date summary playcount album[title */}
                <li>{songData.name}</li>
                <li>{artistName}</li>
                <li>Album: {albumTitle}</li>
                <li>Play Count: {playCount}</li>
                <li>Summary: {songBio}</li>
            </ul>
        </div>
    )
}

export default SongDetail