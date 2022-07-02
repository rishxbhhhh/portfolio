import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function SocialMedia() {
  return (
    <div className="app__social">
      <a href="https://www.instagram.com/rishabh941._/">
        <motion.div whileHover={{ scale: 1.2 }} className="app__social-icon">
          <BsInstagram />
        </motion.div>
      </a>

      <a href="https://www.linkedin.com/in/rishabhrajpurohit1/">
        <motion.div whileHover={{ scale: 1.2 }} className="app__social-icon">
          <BsLinkedin />
        </motion.div>
      </a>

      <a href="https://www.github.com/rishxbhhhh">
        <motion.div whileHover={{ scale: 1.2 }} className="app__social-icon">
          <BsGithub />
        </motion.div>
      </a>
    </div>
  );
}

export default SocialMedia;
