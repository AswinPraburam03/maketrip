import React from 'react'
import '../Footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
    <div className="sectionContainer container flex">
      <div className="gridOne">
        <div className="logoDiv">
          <h1>MakeTrip!</h1>
        </div>
        <p>Your mind should be stronger than yours feelings, fly!</p>
        <div className="socialIcon flex">
          <FacebookIcon className='icon'/>
          <InstagramIcon className='icon'/>
          <YouTubeIcon className='icon'/>
        </div>
      </div>

      <div className="footer-links">
        <span className="linkTitle">Information</span>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Expolre</a>
        </li>
        <li>
          <a href="">Travel</a>
        </li>
        <li>
          <a href="">Flight Status</a>
        </li>
        <li>
          <a href="">Check In</a>
        </li>
        <li>
          <a href="">Manage Your Bookings</a>
        </li>
      </div>


      <div className="footer-links">
        <span className="linkTitle">Quick Links</span>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Baggage</a>
        </li>
        <li>
          <a href="">Route Map</a>
        </li>
      </div>


      <div className="footer-links">
        <span className="linkTitle">Quick Links</span>
        <li>
          <a href="">Our Partners</a>
        </li>
        <li>
          <a href="">Destinations</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Transportation</a>
        </li>
      </div>
    </div>

    <div className="copyRight flex">
  <p>Courtesy Designed By <a href="https://www.google.com/" target='_blank'>william</a></p>
    </div>
  </div>
  )
}

export default Footer
