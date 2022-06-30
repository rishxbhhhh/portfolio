import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {AppWrap} from '../../wrapper';
import { urlFor, client } from "../../client";
import "./About.scss";

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div className="app__head-text">
        <h2>
          I know that<br/><span>&nbsp;&nbsp;Good Design</span> <br/> means
          <br/><span>&nbsp;&nbsp;Good Business</span>
        </h2>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2>{about.title}</h2>
            <p>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, 'about');
