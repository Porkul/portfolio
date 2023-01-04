import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {CgFigma} from'react-icons/cg'
import {FaReact,FaNodeJs, FaCss3Alt} from'react-icons/fa'
import {DiMongodb} from'react-icons/di'
import {BsFillBootstrapFill} from'react-icons/bs'
import {SiPostman, SiMysql, SiPhp,SiJavascript, SiSass,SiExpress} from'react-icons/si'  

const Experience = () => {
  return (
    <section id='experience'>
        <h5 className='title' data-title="What are my"> Skills</h5>
        <div className='container experience__container'>
          <div className="experinece__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <AiFillHtml5 className='logo'/> <h5>HTML</h5>
              </article>
              <article className='experience__details'>
                <FaCss3Alt className='logo'/> <h5>CSS</h5>
              </article>
              <article className='experience__details'>
                <SiSass className='logo'/> <h5>Sass</h5>
              </article>
              <article className='experience__details'>
                <SiJavascript className='logo'/> <h5>Javascript</h5>
              </article>
              <article className='experience__details'>
                <FaReact className='logo'/> <h5>React</h5>
              </article>
              <article className='experience__details'>
                <BsFillBootstrapFill className='logo'/> <h5>Bootstrap</h5>
              </article>
              <article className='experience__details'>
                <CgFigma className='logo'/> <h5>Figma</h5>
              </article>
            </div>
          </div>
          <div className="experinece__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <SiPhp className='logo'/> <h5>PHP</h5>
              </article>
              <article className='experience__details'>
                <SiMysql className='logo'/> <h5>MySQL</h5>
              </article>
              <article className='experience__details'>
                <FaNodeJs className='logo'/> <h5>Node.js</h5>
              </article>
              <article className='experience__details'>
                <SiExpress className='logo'/> <h5>Express.js</h5>
              </article>
              <article className='experience__details'>
                <DiMongodb className='logo'/> <h5>MongoDB</h5>
              </article>
              <article className='experience__details'>
                <SiPostman className='logo'/> <h5>Postman</h5>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Experience