import Image from "next/image";
import Link from "next/link";

const AnimeList = async({api}) => {
    return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4 "  >
        {api.data?.map((anime,i) => {
            return (
                <Link href={`/anime/${anime.mal_id}`} key={i} className="cursor-pointer text-color-primary transition-all">
                    <Image src={anime.images.webp.image_url} alt="..." width={350} height={350} className="w-full object-cover h-64" />
                    <h3 className='font-bold md:text-xl text-md p-4 hover:text-color-accent ' >{anime.title}</h3>
                </Link>
            )
        })}
    </div>
    )
}

export default AnimeList ;