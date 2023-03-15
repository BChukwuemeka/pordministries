import { InfoSection, Pricing } from '../../components'
import { homeObjFour, homeObjThree } from './Data'



const Products = () => {
  return (
    <>
    <InfoSection  {...homeObjThree} />
    <Pricing />
    <InfoSection  {...homeObjFour} />
    </>
  )
}

export default Products