import axios from 'axios'
import React, { useState } from 'react'

const Movie = () => {

    const api_Url = "https://api.themoviedb.org/3/"
    const api_Key = "997810173a96ab1b6121402e6850cfd4"
    const url_Img = "https://image.tmdb.org/t/p/original"

    const [movie, setMovie] = useState({ title: "cargando pelicula" })

    if (results.length) {
        fetchMovie(results[0].id)
    }

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${api_Url}/movie/${id}`, {
            params: { api_key: api_Key, append_to_response: "videos" },
        })

        if (data.videos && data.videos.results) {
            const trailer = data.video.results.find(
                video => { video.name === "Official Trailer" }
            )
            setMovie(trailer ? trailer : data.videos.results[0])
        }
        setMovie(data)
    }

    return (
        <div>Movie</div>
    )
}

export default Movie