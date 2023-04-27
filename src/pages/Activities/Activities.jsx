import './Activities.css'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjThree } from './Data'
import '../Gallery/galleryStyles.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Autoplay} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css'

import FeatureImage from '../../images/gallery/gallery10.jpeg'
import FeatureImage1 from '../../images/gallery/gallery1.jpeg'
import FeatureImage2 from '../../images/gallery/gallery20.jpeg'
import FeatureImage3 from '../../images/gallery/gallery11.jpeg'
import FeatureImage4 from '../../images/gallery/gallery12.jpeg'
import FeatureImage5 from '../../images/gallery/gallery13.jpeg'
import FeatureImage6 from '../../images/gallery/gallery14.jpeg'
import { Img } from '../../components/Content/ContentStyles';







const Activities = () => {

    SwiperCore.use([Autoplay])

  return (
    <>
       <div className='gallery__container-heading'>
          <h1> Church Events / Prayer Assignments </h1>
        </div>
      <InfoSection  {...homeObjOne} />
      <Swiper
          breakpoints={{
            // window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // window width is >= 760px
            760: {
              width: 760,
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // window width is >= 1024px
            1024: {
              width: 1024,
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }}
          modules={[Pagination, Autoplay]}
          loop= {true}
        
        cardsEffect={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className='swiper-container'
      >
        <SwiperSlide ><Img src={FeatureImage} alt='FeatureImage' /></SwiperSlide>
        <SwiperSlide ><Img src={FeatureImage1} alt='FeatureImage' /></SwiperSlide>
        <SwiperSlide ><Img src={FeatureImage2} alt='FeatureImage' /></SwiperSlide>
        <SwiperSlide ><Img src={FeatureImage3} alt='FeatureImage' /></SwiperSlide>
        <SwiperSlide ><Img src={FeatureImage4} alt='FeatureImage' /></SwiperSlide>
        <SwiperSlide ><Img src={FeatureImage5} alt='FeatureImage' /></SwiperSlide>
        <SwiperSlide ><Img src={FeatureImage6} alt='FeatureImage' /></SwiperSlide>
                            

      </Swiper>

      <InfoSection  {...homeObjThree} />
    </>
  )
}

export default Activities;