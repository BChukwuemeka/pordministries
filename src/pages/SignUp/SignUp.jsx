import { InfoSection } from '../../components'
import FormNew from '../../components/Form/FormNew';
import { homeObjOne  } from './Data'



const SignUp = () => {
  return (
    <>
        <div className='gallery__container-heading'>
          <h1> Enter your details </h1>
        </div>
    <FormNew/>
    <InfoSection {...homeObjOne} />
    </>
  )
}

export default SignUp;