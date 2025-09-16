import React from 'react'

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import { BsLinkedin, BsGithub } from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a 
            href="https://www.linkedin.com/in/chao-glen-xu-3549b719a/" 
            target="_blank" 
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          
        </div>
        <div>
          <a 
            href="https://github.com/ChaoGlenXu" 
            target="_blank" 
            rel="noreferrer"
          >
            <BsGithub /> 
          </a>
          
        </div>
        {/* <div>
            <BsTwitter/>
        </div>
        <div>
            <FaFacebookF/>
        </div>
        <div>
            <BsInstagram/>
        </div> */}
    </div>
  )
}

export default SocialMedia