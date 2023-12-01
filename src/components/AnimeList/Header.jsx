import Link from "next/link"

const Header = ( {title , linkAnime , lookAnime} ) => {

    return (
    <div className='p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-color-primary' >{title}</h1>
        {linkAnime && lookAnime ? 
        <Link href={`http://localhost:3000/${linkAnime}`} className='md:text-xl text-md underline hover:text-color-accent text-color-primary' >{lookAnime}</Link>
        : null
        }
    </div>
    )
}

export default Header