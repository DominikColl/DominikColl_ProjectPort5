import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {loadAlbumDetail} from '../Page/Code'


const AlbumDetail = (props)=>{

  let { albumId } = useParams();

  let [albumData,setAlbumData] = useState({})

  useEffect(()=>{
    loadAlbumDetail(albumId).then((d)=>{
      setAlbumData(d.album);
      console.log(d.album);
    })
  },[albumId])
  


  return(
    <div>
        <h1>I am Album Detail.</h1>
        <p>{albumId}</p>
        <ul>
          <li>{albumData.name}</li>
        </ul>
    </div>
  )
}

export default AlbumDetail