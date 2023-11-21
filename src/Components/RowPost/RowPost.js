import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(params) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(params.url).then((response) => {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
      alert("Network Error");
    })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length !==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Empty Array')
      }
    })
  }

  return (
    <div className='row'>
      <h2>{params.title}</h2>
      <div className="posters">
        {
          movies.map((obj) =>
            <img onClick={()=>handleMovie(obj.id)} className={params.isSmall ? 'smallposter' : 'poster'} src={`${IMAGE_URL + obj.backdrop_path}`} alt="poster" />
          )
        }



      </div>
    { urlId &&  <YouTube opts={opts}  videoId={urlId.key} /> }
    </div>
  )
}

export default RowPost
