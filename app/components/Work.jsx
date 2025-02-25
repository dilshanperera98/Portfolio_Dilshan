import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import ProjectModal from './ProjectModal'
import { Button } from '@headlessui/react'
import projectData from '@/assets/Data/Projects.json';


const Work = ({isDarkMode}) => {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [tileCount, setTileCount] = useState(4)

  const handleLoadMore = () => {
    setTileCount(prevCount => Math.min(prevCount + 4, projectData.length))
  }

  const textLimiter = (text, limit) => {
    // Strip markdown characters and newlines for the preview text
    const plainText = text.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\n/g, ' ').replace(/\#/g, '').replace(/\-/g, '');
    return plainText.length > limit ? plainText.slice(0, limit) + '...' : plainText
  }

  const short_description_editor = (text) => {
    if(text.length > 100){
      return textLimiter(text, 100);
    }//else make 100 characters by adding spaces
    return text + ' '.repeat(100-text.length);
  }

  const displayedProjects = projectData.slice(0, tileCount)
  const hasMoreProjects = tileCount < projectData.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Works
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        This section highlights the most recent projects I've worked on,
        showcasing my expertise in data engineering, machine learning, AI
        development, and mobile app development. Each project demonstrates my
        ability to leverage cutting-edge technologies to solve real-world
        problems and create innovative solutions. From AI-powered applications
        to complex data pipelines, these works reflect my diverse skill set and
        passion for continuous learning and growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer h hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            onClick={() => {
              setSelectedProject(project);
              setOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>

            <h3 className="text-lg my-4 text-gray-700 dark:text-white h-12 line-clamp-2 overflow-hidden">
              {textLimiter(project.title, 30)}
            </h3>
            <p className="text-sm text-gray-400 lending-5 dark:text-white/80 h-10 line-clamp-3 overflow-hidden">
              {short_description_editor(project.short_description)}
            </p>
            <div className="flex items-center gap-2 text-sm mt-5">
              View Details
              <Image alt="" src={assets.right_arrow} className="w-4" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {hasMoreProjects && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          onClick={handleLoadMore}
          className="w-max flex items-center justify-center gap-2 text-gray-500 border-[0.5px] border-gray-700 rounded-full 
          py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Load More
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right Arrow"
            className="w-4"
          />
        </motion.button>
      )}

      <ProjectModal
        open={open}
        setOpen={setOpen}
        projectData={selectedProject || projectData[0]}
        isDarkMode={isDarkMode}
      />
    </motion.div>
  );
}

export default Work