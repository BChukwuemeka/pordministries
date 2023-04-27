import { InfoSection} from '../../components'
import FormGive from '../../components/Form/FormGive';
import { homeObjOne} from './Data'



const Services = () => {
  return (
    <>
    <FormGive />
    <InfoSection  {...homeObjOne} />
    </>
  )
}

export default Services;