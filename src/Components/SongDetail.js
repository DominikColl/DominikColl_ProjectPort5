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
            //setting states
            console.log(d.track);
            setSongData(d.track);
            setSongImg(d.track.album.image[2]['#text']);
            setArtistName(d.track.artist.name);
            setAlbumTitle(d.track.album.title);
            setPlayCount(d.track.playcount);
            if (d.track.wiki) {
                setSongBio(d.track.wiki.summary);
            }
            console.log(d.track.artist.name);
        }).then((e) => {
            console.log(songData);
        })
        // add song data to get rid of warning at the cost of a infnite loop making fetch calls
    }, [songId])
    return (
        <div className='moreDetail'>
            <Header />
            {/* <h1>I am Album Detail.</h1>
            <p>{songId}</p> */}
            <ul className='detailList'>
                <div className='imgCon'>
                    <img src={songImg} alt='Song Img' />
                    <li><h1>{songData.name}</h1></li>
                </div>
                <li><h2>By {artistName}</h2></li>
                <li><h2>Album Title: {albumTitle}</h2></li>
                <li><h2>Play Count:</h2> {parseFloat(playCount).toLocaleString('en')}</li>
                <li className='bio'>Summary: {songBio}</li>
            </ul>
        </div>
    )
}

export default SongDetail