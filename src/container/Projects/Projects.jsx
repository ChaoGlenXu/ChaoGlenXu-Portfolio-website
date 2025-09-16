import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';


import { urlFor, client } from '../../client';

import './Projects.scss';



//the following will now be dynamicly updated from backend sanity
/*
const projects_always = [
  {title: 'web task tracker', description: 'A full-stack task management application built entirely by me, Chao (Glen) Xu, using the MERN stack (MongoDB, Express, React, Node.js) and Vite for fast frontend development.', imgUrl: images.Web_Task_Tracker},
  {title: 'Software Engineering', description: 'I can design, develop, and maintain software systems with clean, efficient, and scalable code.', imgUrl: images.software_engineering},
  
]
*/


const Projects = () => {
  
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]'

    client.fetch(query)
      .then((data) => setprojects(data))
  }, [])
  
  
  return (
    <>
      <h2 className="head-text"> My Projects — <span>explore live demos and GitHub links.</span> </h2>

      <div className="app__profiles">
        {/* {projects_always.map((projects_alway, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={projects_alway.title + index}
          >
            <img src={projects_alway.imgUrl} alt={projects_alway.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}> {projects_alway.title} </h2>
            <p className="p-text" style={{ marginTop: 10 }}> {projects_alway.description} </p>
          </motion.div>
        ))} */}


        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={project.title + index}
          >
            <img src={urlFor(project.imgUrl)} alt={project.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}> {project.title} </h2>
            <p className="p-text" style={{ marginTop: 10 }}> {project.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Projects