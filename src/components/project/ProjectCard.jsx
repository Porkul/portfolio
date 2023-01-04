import React, {useState} from 'react'
import "./projectCard.css";
import {AiFillCloseCircle} from 'react-icons/ai'

import { motion } from "framer-motion"

const Project = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
  return (
    <>
        <div className="item" onClick={toggleModal}>
            <img src={props.img} alt=""/>
            <h3>{props.title}</h3>
        </div>
        
        {modal && (<motion.div className='modal'
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0.2
                }
              }}>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
              <div className='modal-img left'>
                <img src={props.img} alt='' />
              </div>
              <div className='modal-text right'>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <br/>
                <p>Tools and technologies used: {props.tools}</p>
                <div className='button'>
                  <a href={props.link} className='btn btn-primary' target='_blank'rel="noreferrer" > View Demo </a>
                </div>
                <button onClick={toggleModal}><AiFillCloseCircle className='btn__close'/></button>
              </div>
            </div>
         </motion.div>
        )}
    </>
  );
};

export default Project;



