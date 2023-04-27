import React from 'react'
import { InfoSection } from '../../components'
import { homeObjFour } from '../Activities/Data'
import './galleryStyles.css'




const Gallery = () => {

    const galleryLength = 21;
  const images = [];

  for (let i = 1; i <= galleryLength ; i++ ) {
      images.push(require(`../../images/gallery/gallery${i}.jpeg`));

  }




    return (
      <>
        <div className='gallery__container-heading'>
          <h1> Gallery </h1>
        </div>

        <section className="gallery">
          <div className="container gallery__container">
              {
                images.map((image, index) => {
                return (
                    <article key={index}>
                      <img  src={image} alt={`gallery img ${index + 1}`}/>
                    </article>
                  )
                })
              }
          </div>
        </section>
       <InfoSection {...homeObjFour} />
      </>
  )
}

export default Gallery













