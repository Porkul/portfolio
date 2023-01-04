import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaFacebookF} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://linkedin.com/in/katrinporkul" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Porkul" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/katrin.webhelp" target="_blank" rel="noreferrer" ><FaFacebookF/></a>
    </div>
  )
}

export default HeaderSocial