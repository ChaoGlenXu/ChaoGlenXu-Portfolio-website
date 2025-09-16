import React from 'react';
import { motion, scale } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';


const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div  className="app__header app_flex">
      <motion.div 
        whileInView={{ x: [-150, 0], opacity: [0, 1] }}
        transition={{duration: 1.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20}}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Chao (Glen) Xu</h1>
            </div>
          </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Recent Computer Engineering graduate   </p>
          {/* <p className="p-text">Full Stack Developer </p> */}
          <p className="p-text">Software Engineer </p>
          {/* <p className="p-text">Embedded Software Engineer </p> */}
        </div>

        <div className="tag-intro app__flex">
          <p className="p-text">University of Toronto  </p>
          <p className="p-text">Bachelor of Applied Science (BASc), Computer Engineering  </p>
          {/* <p className="p-text">Full Stack Developer </p> */}
          <p className="p-text">Minors: Artificial Intelligence & Engineering Business </p>
          {/* <p className="p-text">Embedded Software Engineer </p> */}
        </div>

        <div className="tag-intro app__flex">
          <p className="p-text">📍 Based in San Francisco Bay Area  </p>
        </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{duration: 2.5, delayChildren: 0.5}}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{duration: 1.5, ease: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />        
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.typescript, images.javascript, images.python, images.java, images.cPlusPlus, images.c].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`} >
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap( Header, 'home' );