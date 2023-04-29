import './notFound.css'

import { Link } from 'react-router-dom'




const NotFound = () => {
  return (
      <>
            <div className='gallery__container-heading'>
          <h1> Read Galatians 3 : 13 - 14 </h1>
        </div>
<section>
  <div className="container notfound__container">
    <h2>!Oops... Looks like you got Lost</h2>
    <Link className="btn" to="/">Go back Home</Link>
  </div>
</section>
    </>
  )
}

export default NotFound