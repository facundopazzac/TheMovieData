"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"

const Movies = () => {
    const api_Url = "https://api.themoviedb.org/3/"
    const api_Key = "997810173a96ab1b6121402e6850cfd4"
    const url_Img = "https://image.tmdb.org/t/p/original"

    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [trailer, setTrailer] = useState(null)
    const [movie, setMovie] = useState({ title: "Loading movies" })
    const [playing, setPlaying] = useState(false)

    const fetchMovies = async (key) => {
        const type = key ? "search" : "discover";
        const {
            data: { results },
        } = await axios.get(
            `${api_Url}/${type}/movie?sort_by=popularity.desc&language=es-ES&api_key=${api_Key}`,
            {
                params: { api_key: api_Key, query: key },
            }
        );

        setMovies(results);

    };

    useEffect(() => {
        fetchMovies();
    }, []);


    const searchMovies = (e) => {
        e.preventDefault()
        fetchMovies(searchKey)
    }



    return (
        <div class="flex flex-col items-center justify-center py-8 mt-20">
            <form class="flex items-center w-full md:w-2/5 mb-4" onSubmit={searchMovies}>
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:border-gray-400" placeholder="Search" required onChange={e => setSearchKey(e.target.value)} />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-sky-800 rounded-lg hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </form>

            <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 mx-2">
                {movies.map((movie) => (
                    <a href={`movie/${movie.id}`} key={movie.id}>
                        <div class="relative w-full h-80">
                            <img
                                src={`${url_Img + movie.poster_path}`}
                                alt={movie.title}
                                class="h-full w-full object-cover rounded-lg"
                            />
                            <div class="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition ease-in duration-200 bg-black bg-opacity-50 flex items-center justify-center">
                                <p class="text-white text-lg font-bold">{movie.title}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>



    )
}

export default Movies
