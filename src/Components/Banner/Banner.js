import React, {useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../Constants/Constants'
function Banner() {
    const[movie, setMovie] = useState()
    
    useEffect(()=>{
        let num = Math.floor((Math.random()*20)+1)
        axios.get(`/trending/all/week?language=en-US&api_key=${API_KEY}`).then((response)=>{
            console.log(response.data.results[0])
            setMovie(response.data.results[num])
        });
    },[])
    return (
        
        <div
        style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className="button">Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
        
    )
}

export default Banner
