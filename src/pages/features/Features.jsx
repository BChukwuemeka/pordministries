// import { Img } from '../../components/Content/ContentStyles';
import MediaQuery from 'react-responsive'




import Feature from '../../components/feature/Feature';
import FeatureImage from '../../images/gallery/gallery10.jpeg'
import FeatureImage1 from '../../images/gallery/gallery1.jpeg'
import FeatureImage2 from '../../images/gallery/gallery20.jpeg'
import FeatureImage3 from '../../images/gallery/gallery11.jpeg'
import FeatureImage4 from '../../images/gallery/gallery12.jpeg'
import FeatureImage5 from '../../images/gallery/gallery13.jpeg'
import FeatureImage6 from '../../images/gallery/gallery14.jpeg'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination, Autoplay} from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css'
import React from 'react';
import './features.css';
import { Img } from '../../components/Content/ContentStyles';

import FeaturesCard from './FeaturesCard';
const featuresData = [
  {
    title: 'Want to meet Us?',
    text: 'Join our Senior Pastor for a counselling one to one meeting every Tuesday from 7am. Our Main deliverance service holds every Saturday 8am prompt',
  },
  {
    title: 'Who is Our Pastor?',
    text: 'Considered sympathize uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Can my kids stay in the service with me?',
    text: "We think your kids will probably enjoy our children class more than the service, but if you'd like to have them sit through the service you are more than welcome to do so.",
  },
  {
    title: 'Do we have a safe place for your car?',
    text: 'Cars are parked inside the church compund under the watchfull eyes of our security team',
  },
];


const Features = () => {
  
  
      SwiperCore.use([Autoplay])
  
    return  (

       
      <>

     <div className='about__container-heading'>
          <h1> Join Us Every Saturday by 8am </h1>
        </div>

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

      <div className="BnB__features-heading">

                  <h1 className="gradient__text">It Is For Freedom That CHRIST Has Set Us Free. Stand Firm, Then, And Do Not Let YOURSELVES Be Burdened Again By A Yoke Of Slavery.</h1>
                  <p>Galatians 5: 1 (NIV)</p>
      </div>
        
      <div className="BnB__features section__padding" id="features">

          <MediaQuery query='(min-device-width: 990px)'>
              
            {<FeaturesCard />}  
            
          </MediaQuery>

          
      <div className="BnB__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
        </div>
        
        </>
  )
};

        export default Features;
