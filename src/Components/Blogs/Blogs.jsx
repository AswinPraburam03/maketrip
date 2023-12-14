import React from 'react'
import '../Blogs/Blogs.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Cus1 from '../../Assets/cus1.png'
import Cus2 from '../../Assets/cus2.png'
import Cus3 from '../../Assets/cus3.png'

const Blogs = () => {
  return (
    <section id="testmonial">
    <div className="title">
      <h2>Blogs</h2>
    </div>

    <div className="testmonial-container container">

      <div className="testmonial-card">
        
      <img src={Cus1} alt="" />
      <h4>Wiiliamson</h4>
      <h5>CEO & Founder</h5>
      <div className="quotes">
        <FormatQuoteIcon />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit totam, magnam id, unde officiis ullam doloribus error nesciunt sed quasi neque sunt delectus consectetur veritatis </p>

      </div>
      <div className="testmonial-card">

      <img src={Cus2} alt="" />
      <h4>Smith</h4>
      <h5>CEO & Founder</h5>
      <div className="quotes">
        <FormatQuoteIcon />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit totam, magnam id, unde officiis ullam doloribus error nesciunt sed quasi neque sunt delectus consectetur veritatis reprehenderit? Cupiditate, beatae deserunt?</p>

      </div>
      <div className="testmonial-card">

      <img src={Cus3} alt="" />
      <h4>Catherine</h4>
      <h5>CEO & Founder</h5>
      <div className="quotes">
        <FormatQuoteIcon />
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit totam, magnam id, unde officiis ullam doloribus error nesciunt sed quasi neque sunt delectus consectetur veritatis reprehenderit? Cupiditate, beatae deserunt?</p>

      </div>
     
</div>
</section>
  )
}

export default Blogs