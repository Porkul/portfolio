import React  from 'react'
import './about.css'
import './animation.css'
import './animation.js'
import CTA from './CTA'

const About = () => {
  return (
    <section id='about'>
      <h5 className='title' data-title="Get to know"> About me</h5>
      <div className="container about__container">
        <div className="about__me">
          <h4 className='text-md wave'>Glad to see you here</h4>
          <p>
            I am a full-stack software developer as well as a final-year bachelor's student.<br />
            My exciting journey started 3 years ago when I caught fire coding. I love what I do and do it with passion, so I decided to continue my studies at the university to improve my skills and qualifications.<br />
            My plans for the future are to continue to grow in this direction and be part of a great team where team members encourage and support each other.
          </p>
          <CTA />
        </div>
        <div className="about__content">
        <div className="animation " data-animation-step="1">
            <div class="device">
              <div class="phone-home-button"></div>
              <div class="tablet-home-button"></div>
              <div class="screen-stand"><div class="leg"></div><div class="foot"></div></div>
              <div class="display">
              <div class="slide1"><div>Works on <em>desktops</em></div></div>
              <div class="slide2"><div>Works on <em>tablets</em></div></div>
              <div class="slide3"><div>Works on <em>phones</em></div></div>
              </div>
            </div>
        </div>
        </div>
      </div>

    </section>
  )
}

export default About