import { getAnimeData } from "@/libs/api"
import VideoPlayer from "@/components/util/VideoPlayer"
import Image from "next/image"

const Page = async({params : {id}}) => {
    const response = await getAnimeData(`anime/${id}`, '')
    const animeDetail = response.data

    return (
        <>
        <div className="pt-4 px-4" > 
            <h1 className="text-2xl text-color-primary" >{animeDetail.title}</h1>
        </div>
        <div className="pt-4 px-4 flex gap-4 text-color-primary overflow-x-auto " >
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2" >
            <h3>Ranking</h3>
            <p>{animeDetail.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Score</h3>
            <p>{animeDetail.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Popularity</h3>
            <p>{animeDetail.popularity}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Episode</h3>
            <p>{animeDetail.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Members</h3>
            <p>{animeDetail.members}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex flex-wrap sm:flex-nowrap gap-2 " >
            <Image src={animeDetail.images.webp.image_url} alt={animeDetail.images.jpg.image_url} 
            width={300}
            height={350}
            className="w-full object-cover rounded" />
            <p className="px-3 text-color-primary" >{animeDetail.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={animeDetail.trailer.youtube_id}  />
        </div>
        </>
    )
}

export default Page