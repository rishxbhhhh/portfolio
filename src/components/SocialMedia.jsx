import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'; 
import {motion} from 'framer-motion';

function SocialMedia() {
  return (
    <div className='app__social'>
        <motion.div
        whileHover={{scale:1.2}}
        className="app__social-icon">
            <BsInstagram />
        </motion.div>
        <motion.div
        whileHover={{scale:1.2}}
        className="app__social-icon">
            <BsLinkedin />
        </motion.div>
        <motion.div
        whileHover={{scale:1.2}}
        className="app__social-icon">
            <BsGithub />
        </motion.div>
    </div>
  );
}

export default SocialMedia;