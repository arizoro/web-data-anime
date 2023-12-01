"use client"

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/util/HeaderMenu"
import Pagination from "@/components/util/Pagination";
import { useEffect, useState } from "react"
import { getAnimeData } from "@/libs/api";



const page = () => {

    const [page, setPage] = useState(1);
    const [topAnime , setTopAnime] = useState([])


    const fetchAnime = async() => {
        const pageAnime = await getAnimeData("top/anime" , `page=${page}`);
        setTopAnime(pageAnime);
    }


    useEffect(() => {
        fetchAnime()
    }, [page])

    return (
        <div>
            <div className=" justify-center items-center">
            <HeaderMenu title={`Popular Anime #${page}`}  />
            <AnimeList api={topAnime} />
            <Pagination page={page}  setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
            </div>
        </div>
    )
}

export default page