import React from 'react'
import './header.css'
import ME from '../../assets/img/my.png'
import HeaderSocial from './HeaderSocial'
import { Typewriter } from "react-simple-typewriter"

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hey, I'm</h5>
        <h1>Katrin Porkul</h1>
        <h5 className="text-light">
        a
              <span>
                <Typewriter words={[" Software Developer", " Knowledge Seeker" , " Coding Enthusiast"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
        </h5>
        <HeaderSocial />
        <div className="me">
          <img className="img" src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
