import React from 'react'
import { heroThree } from '../../components/Hero/HeroData'
import Content from '../../components/Content/Content'
import Testimonials from '../../components/Testimonials/Testimonials'

const Testimonies = () => {
    return (
      <>
     
      <Testimonials />
      <Content {...heroThree} />
      </>
  )
}

export default Testimonies;