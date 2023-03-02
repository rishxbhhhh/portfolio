import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from '../../wrapper';

import "./Header.scss";

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <h1 className="head-text">I'm Rishabh Rajpurohit</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Developer / Software Engineer</p>
            <p className="p-text">B.Tech - Computer Science and Engineering</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">This is Tom, Click on Him</p>
            <p className="p-text">He will take you to my Resume.</p>
          </div>
          
      </div>
      
    </motion.div>
    <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__header-info"
        id="app__header-cv"
      >
        <div className="app__header-badge">
        <a href="https://drive.google.com/file/d/10ORcSyt5JVq3lorfN-HeHmQ3q5I9Ybiz/view?usp=share_link" target="_blank" rel="noreferrer">
          <div className="badge-cmp app__flex">
            <img src={images.cv} width="100%" alt="a dog wearing glasses"/>
          </div>
        </a>
        </div>    
        
      
    </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');
