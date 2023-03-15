import { InfoSection, Pricing } from '../../components'
import { homeObjOne, homeObjThree, homeObjTwo } from './Data'



const Services = () => {
  return (
    <>
    <Pricing />
    <InfoSection  {...homeObjOne} />
    <InfoSection  {...homeObjTwo} />
    <InfoSection  {...homeObjThree} />
    </>
  )
}

export default Services;