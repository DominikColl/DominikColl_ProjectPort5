import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadArtistDetail } from '../Page/Code'
import './style.css';
import Header from './header';

const SongDetail = (props) => {

    let { artistId } = useParams();
    //name bio.summary stats.playcount similar.artist[]

    let [artistName, setArtistName] = useState('');
    let [bio, setBio] = useState('');
    let [playCount, setPlayCount] = useState('');
    let [similarArt, setSimilarArt] = useState([]);
    useEffect(() => {
        console.log(artistId);
        loadArtistDetail(artistId).then((d) => {
            console.log(d.artist);
            setArtistName(d.artist.name);
            setBio(d.artist.bio.summary);
            setPlayCount(d.artist.stats.playcount);
            setSimilarArt(d.artist.similar.artist);
        })
    }, [artistId])

    let fillSimilarArt = similarArt.map((e, i) => {
        console.log(e.name);
        return <li>{e.name}</li>
    })

    return (
        <div class='moreDetail'>
            <Header />
            <h1>I am Album Detail.</h1>
            <p>{artistId}</p>
            <ul>
                <li>{artistName}</li>
                <li>{bio}</li>
                <li>{playCount}</li>
                {fillSimilarArt}
            </ul>
        </div>
    )
}

export default SongDetail