import Header from '@/components/AnimeList/Header'
import AnimeList from '@/components/AnimeList'


const page = async({params}) => {

  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  console.log(decodedKeyword)
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  const SearchAnime = await response.json()

  return (
    <>
      <section>
      <Header title={decodedKeyword}  />
      <AnimeList api={SearchAnime} />
      </section>
    </>
  )
    
}

export default page