import React, {useState} from 'react'
import '../Main/Main.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import {travel} from '../../../src/data'



const Main = () => {

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    arrows: false, 
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      // linkDefault: imgGirl,
    }));
  };

  return (
<div className="slider-card">


    <div className='slider'>
   <h2>Popular Destinations</h2>
   <p>Let's visit favorite destination and enjoy every moment</p>
   </div>
    
    <div className="App">
      <Slider {...settings}>
        {travel.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.Img
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
              <button className='btn'>Book</button>
            </div>
           
          </div>
        ))}
      </Slider>
    </div>

    </div>
  );
}
 
export default Main


