import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KATRIN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="www.linkedin.com/in/katrinporkul"><BsLinkedin/></a>
        <a href="https://github.com/Porkul"><FaGithub/></a>
        <a href="https://www.facebook.com/katrin.webhelp"><FaFacebookF/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Katrin Porkul. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer