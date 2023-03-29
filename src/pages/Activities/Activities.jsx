import { InfoSection, Pricing } from '../../components'
import { homeObjOne, homeObjThree } from './Data'



const Activities = () => {
  return (
    <>
    <InfoSection  {...homeObjOne} />
    <Pricing />
    <InfoSection  {...homeObjThree} />
    </>
  )
}

export default Activities;