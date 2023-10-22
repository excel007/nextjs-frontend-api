import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}
type MovieType = {
    adult: boolean
    backdrop_path: string,
    genre_ids: [number],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export default async function Movie() {
    const key = process.env.API_KEY
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
    const data = await fetch(url)
    const res = await data.json()
    // console.log(res)
    return (
        <div>Movie
            {/* {res.results.map((mov: MovieType) => <i>{mov.original_title}</i>)} */}
            <div className='grid gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {res.results.map((mov: MovieType) =>
                    <div key={mov.id} className='h-90'>
                        <div className='relative h-full'>
                        {/* {mov.original_title} */}
                        <Link href={`/movie/${mov.id}`}>
                            <Image src={`https://image.tmdb.org/t/p/original${mov.poster_path}`} width={800} height={800} alt={mov.title} className='rounded' />
                        </Link>
                        <div className='absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800'>
                            <h2 className='text-cyan-200 text-center text-sm truncate'>{mov.title}</h2>
                            {mov.release_date ? <p className='text-cyan-400 text-center text-xs truncate'>{mov.release_date}</p> : null}
                        </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
