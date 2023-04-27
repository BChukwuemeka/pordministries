import { InfoSection } from '../../components'
import  Content  from '../../components/Content/Content'
import Hero from '../../components/Hero/Hero'
import Carousel from '../../components/Carousel/Carousel'
import Features from '../features/Features'
import { heroOne } from '../../components/Hero/HeroData'
import { homeObjOne, homeObjThree, homeObjTwo } from './Data'



const Home = () => {
  return (
    <>
      <Hero {...homeObjOne} />
      <Features />
      <InfoSection  {...homeObjOne} />
      <InfoSection  {...homeObjTwo} />
      <InfoSection  {...homeObjThree} />
      <Content {...heroOne} />
      <Carousel />
    </>
  )
}

export default Home