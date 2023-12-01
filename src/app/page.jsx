import Header from '@/components/AnimeList/Header'
import AnimeList from '@/components/AnimeList'
import { getAnimeData, getNestedAnime, reproduce } from '@/libs/api'

const Home = async() => {
  const topAnime = await getAnimeData("top/anime" , "limit=8")

  let recommendedAnime = await getNestedAnime("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)
  // const randomAnime = () => {
  //   let data1 = Math.floor(Math.random() * (recommendedAnime.length - 8) + 1)
  //   let data2 = data1 + 8
    
  //   const randomData = []
  //   randomData.push(data1)
  //   randomData.push(data2)

  //   return randomData
  // }

  // const animeRandom = randomAnime()
  // console.log(animeRandom)

  // recommendedAnime = {
  //   data : recommendedAnime.slice(animeRandom[0], animeRandom[1])
  // }
  return (
    <>
      <section>
      <Header title="Populer Anime" linkAnime={'/populer'} lookAnime="Lihat Semua" />
      <AnimeList api={topAnime} />
      </section>
      <section>
      <Header title="Recommend Anime" />
      <AnimeList api={recommendedAnime} />
      </section>
    </>

  )
}

export default Home;
