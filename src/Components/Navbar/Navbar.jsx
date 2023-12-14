import React, {useState} from 'react'
import '../Navbar/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {

    const[active, setActive] = useState('navBar')

  //Function to open Navbar:
  const openMenu = () => {
    setActive("navBar activeNavbar")
  }

  //Function to close Navbar:
  const closeMenu = () => {
    setActive("navBar")
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className='logo'>
            <h1>MakeTrip!</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='NavLists flex'>

            <li className="navItem">
              <a href="#" className='navLink'>Home</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>About Us</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Tour</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Package</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Contact Us</a>
            </li>
            <button className='btn'>
              <a href="/">Sign Up</a>
            </button>
          </ul>

          <div onClick={closeMenu} className="closeNavbar">
          <CloseIcon className="icon"/>
          </div>


        </div>

        <div onClick={openMenu} className="toggleNavbar">
        <MenuIcon  className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar