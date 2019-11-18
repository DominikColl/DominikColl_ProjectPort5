import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadArtistDetail } from '../Page/Code'


const SongDetail = (props) => {

    let { artistId } = useParams();

    let [albumData, setAlbumData] = useState({})

    useEffect(() => {
        console.log(artistId);
        loadArtistDetail(artistId).then((d) => {
            // setAlbumData(d.album);
            console.log(d);
        })
    }, [artistId])



    return (
        <div>
            <h1>I am Album Detail.</h1>
            <p>{artistId}</p>
            <ul>
                {/* <li>{albumData.name}</li> */}
            </ul>
        </div>
    )
}

export default SongDetail