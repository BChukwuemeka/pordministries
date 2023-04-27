import './about.css'

import StoryImage from '../../images/gallery/gallery1.jpeg'
import VisionImage from '../../images/gallery/gallery12.jpeg'
import MissionImage from '../../images/gallery/gallery2.jpeg'


const About = () => {
  return (
      <>
      <div className='about__container-heading'>
          <h1> About Us </h1>
        </div>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="our story img" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>We are a ministry founded on biblical principles. We serve in the Spirit of excellence with integrity and compassion for our community, our nation, and our world.
            </p>
            <p>We have established a reputation for reaching the lost and broken and to minister and serve them with utmost level of dignity and respect.  
            </p>
            <p>We are recognized for our dedication to spiritual excellence and mentoring and supporting spiritual leaders. 
            </p>
          </div>
        </div>
      </section>


      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Our mission is to educate and create a radically inclusive, just and loving community to alleviate suffering and break the cycles of demonic oppression and possesion through the knowledge of the finished work of Christ.
            </p>
        
          
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="our vision img" />
          </div>
        </div>
      </section>

      
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="our mission img" />
          </div>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
                Our Vision is to see people saved, healed, set free, discipled, equipped, empowered, and serving God. 
            </p>
            <p>
              "therefore go make disciples of all nations , baptizing them in the name of the Father, and the Son , and the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the end of the age." <br />
                -Matthew 28: 19-20 NIV. 
            </p>
            
          </div>
        </div>
      </section>
      </>
  )
}

export default About