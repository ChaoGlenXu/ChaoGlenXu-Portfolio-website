import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client } from '../../client';

import './About.scss';


//the following will now be dynamicly updated from backend sanity
const abouts_always = [
  {title: 'Full Stack Web Developement', description: 'I can build responsive and interactive web applications using frontend and backend technologies like React, Node.js, and databases.', imgUrl: images.full_stack_web_dev},
  {title: 'Software Engineering', description: 'I can design, develop, and maintain software systems with clean, efficient, and scalable code.', imgUrl: images.software_engineering},
  {title: 'AI Agent Developement', description: 'I can create autonomous AI agents and intelligent assistants for automation and decision-making tasks.', imgUrl: images.AI_Agent_dev},
  {title: 'Embedded Software Engineering', description: 'I can develop firmware and software for hardware devices, optimizing performance for constrained systems.', imgUrl: images.embedded_software_dev},
  {title: 'AI/ML Engineering', description: 'I can build machine learning models and intelligent systems to solve complex real-world problems.', imgUrl: images.AI_ML_Engineering},
  {title: 'Database Engineering', description: 'I can design, implement, and maintain relational and NoSQL databases to ensure efficient data storage and retrieval.', imgUrl: images.database_engineering},
  {title: 'Automation Engineering', description: 'I can develop scripts and tools to automate workflows, testing, and repetitive tasks for improved efficiency.', imgUrl: images.Automation_Engineering},
  {title: 'QA / Test Engineering', description: 'I can ensure software quality through testing, debugging, and validating applications for reliability.', imgUrl: images.qa_testing},
  {title: 'Mobile Developement', description: 'I can build native mobile applications with seamless user experiences.', imgUrl: images.mobile_app_dev},
]



const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setabouts(data))
  }, [])
  
  
  return (
    <>
      <h2 className="head-text">Coding with precision, designing with purpose — <span>I code software that delights.</span> </h2>

      <div className="app__profiles">
        {abouts_always.map((abouts_always, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={abouts_always.title + index}
          >
            <img src={abouts_always.imgUrl} alt={abouts_always.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}> {abouts_always.title} </h2>
            <p className="p-text" style={{ marginTop: 10 }}> {abouts_always.description} </p>
          </motion.div>
        ))}


        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            {/*<img src={abouts.imgUrl} alt={about.title} />  {/*old code for without backend*/}
            <img src={urlFor(about.imgUrl)} alt={about.tilte} />
            <h2 className="bold-text" style={{ marginTop: 20 }}> {about.title} </h2>
            <p className="p-text" style={{ marginTop: 10 }}> {about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(About, 'app__about'),
   'about',
   "app__whitebg"
  );