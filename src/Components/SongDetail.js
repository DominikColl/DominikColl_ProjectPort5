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
    let [songImg, setSongImg] = useState('');
    useEffect(() => {
        console.log(songId);
        loadSongDetail(songId).then((d) => {
            console.log(d.track);
            setSongData(d.track);
            setSongImg(d.track.album.image[2]['#text']);
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
            {/* <h1>I am Album Detail.</h1>
            <p>{songId}</p> */}
            <ul class='detailList'>
                <div class='imgCon'>
                    <img src={songImg} />
                    <li><h1>{songData.name}</h1></li>
                </div>
                <li><h2>By {artistName}</h2></li>
                <li><h2>Album Title: {albumTitle}</h2></li>
                <li>Play Count: {parseFloat(playCount).toLocaleString('en')}</li>
                <li class='bio'>Summary: {songBio}</li>
            </ul>
        </div>
    )
}

export default SongDetail