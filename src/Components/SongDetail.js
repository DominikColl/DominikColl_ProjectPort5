import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadSongDetail } from '../Page/Code'


const SongDetail = (props) => {

    let { songId } = useParams();

    let [albumData, setAlbumData] = useState({})

    useEffect(() => {
        console.log(songId);
        loadSongDetail(songId).then((d) => {
            // setAlbumData(d.album);
            console.log(d);
        })
    }, [songId])



    return (
        <div>
            <h1>I am Album Detail.</h1>
            <p>{songId}</p>
            <ul>
                {/* <li>{albumData.name}</li> */}
            </ul>
        </div>
    )
}

export default SongDetail