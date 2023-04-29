import './Testimonials.css'
import { Pagination} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import Profile1 from '../../images/profilepics/profile1.jpg'
import Profile2 from '../../images/profilepics/profile2.jpg'
import Profile3 from '../../images/profilepics/profile3.jpg'
import Profile4 from '../../images/profilepics/profile4.jpg'

import 'swiper/swiper-bundle.css'
import SwiperCore, { Autoplay } from 'swiper';





const Testimonial = () => {

    SwiperCore.use([Autoplay])

    const clients = [
        {img: Profile1,
            name: "Lauretta Nkechi Samuel",
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        },
        {img: Profile2,
            name: "Gift Ebuka",
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        },
        {img: Profile3,
            name: "Katie Blossom",
        review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        },
        {img: Profile4,
            name: "Joseph Nnabuenyi",
            review: 
"            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus assumenda voluptas itaque minima animi impedit aut, ea quo tenetur. Ex eveniet accusamus obcaecati quo optio consectetur laboriosam unde labore!",
        }
    ] 



    return ( 
        <div
            className="t-wrapper"
            id='testimonial'
        >
                <div className="">
                        <div className='gallery__container-heading'>
                        <h1> And we overcame him by the blood of the lamb, and by the word of Our <span className='heading_text'> Testimony </span> </h1>
                        </div>
                    {/* <div className="blur t-blur1"></div>
                    <div className="blur t-blur2"></div> */}
                </div>

                    {/* slide */}
            <Swiper
                breakpoints={{
            // window width is >= 300px
            300: {
              width: 280,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              width: 640,
              slidesPerView: 1,
              spaceBetween: "30",
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
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className='swiper-container'
                    >

                    {clients.map((client, index) => {
                        return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt=""/>
                                    <span>{client.review}</span>
                                    <span className='heading_text'>
                                        {client.name}
                                    </span>
                            </div>
                        </SwiperSlide>
                        )
                    })}

                    </Swiper>

             
        </div>
     );
}
 
export default Testimonial;