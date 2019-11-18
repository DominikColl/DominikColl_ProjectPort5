import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadArtistDetail } from '../Page/Code'
import './style.css';
import Header from './header';
import { utimesSync } from 'fs';

const SongDetail = (props) => {

    let { artistId } = useParams();
    //name bio.summary stats.playcount similar.artist[]

    let [artistName, setArtistName] = useState('');
    let [bio, setBio] = useState('');
    let [playCount, setPlayCount] = useState('');
    let [similarArt, setSimilarArt] = useState([]);
    let [pic, setPic] = useState('');
    useEffect(() => {
        console.log(artistId);
        loadArtistDetail(artistId).then((d) => {
            console.log(d.artist);
            setArtistName(d.artist.name);
            setBio(d.artist.bio.summary);
            setPlayCount(d.artist.stats.playcount);
            setSimilarArt(d.artist.similar.artist);
            setPic(d.artist.image[2]['#text']);
            // console.log(d.artist.image[2]['text'])
        })
    }, [artistId])

    let fillSimilarArt = similarArt.map((e, i) => {
        return <li>{e.name}</li>
    })

    return (
        <div class='moreDetail'>
            <Header />
            {/* <h1>I am Album Detail.</h1>
            <p>{artistId}</p> */}
            <ul class='detailList'>
                <div class='imgCon'>
                    <img src={pic} />
                    <li><h1>{artistName}</h1></li>
                </div>
                <li class='bio'>{bio}</li>
                <li>Plays: {playCount}</li>
                <h2>Similar Artist</h2>
                {fillSimilarArt}
            </ul>
        </div>
    )
}

export default SongDetail