import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import certification_data from "../../assets/Data/Certifications.json";

const About = ({ isDarkMode }) => {
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-4 py-10 scroll-mt-20 sm:px-[12%]"
    >
      {/* Existing header content */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Image section */}
        <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-64 sm:w-80 lg:w-96 rounded-3xl max-x-none h-auto lg:h-[550px]"
    >
      <Image
        src={assets.user_image}
        alt="user"
        className="w-full h-full object-cover rounded-3xl"
      />
    </motion.div>

        {/* Content section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-justify">
            I am a data professional with expertise in database engineering,
            data analysis, and machine learning. I specialize in automating
            workflows, optimizing data processes, and leveraging technologies
            like Python, Apache Airflow, and AWS Redshift. Passionate about
            Generative AI, NLP, and predictive analytics, I aim to drive
            business insights and improve operational efficiency. Always eager
            to stay ahead of emerging technologies, I thrive on solving complex
            problems and delivering impactful solutions.
          </p>

          {/* Info List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                         hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Certifications Dropdown */}
          <div className="relative mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                         hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              onClick={() => setShowCertifications(!showCertifications)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg> 
              Certifications 
            </motion.div>
 
            {showCertifications && (          
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 z-20 mt-2 w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:divide-gray-700"
              >
                <div className="block px-4 py-2 font-medium text-gray-700 bg-gray-50 rounded-t-lg dark:bg-gray-800 dark:text-white">
                  My Certifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {certification_data.map((cert, index) => (
                    <div
                      key={index}
                      className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="shrink-0">
                        <div className="relative">
                          <div
                            className={`w-11 h-11 flex items-center justify-center rounded-full text-white`}
                          >
                            <img
                              className="w-11 h-11 flex items-center justify-center rounded-full"
                              src={cert.icon}
                              alt={cert.title}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full ps-3">
                        <div className="text-sm mb-1.5 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {cert.title}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {cert.issuer} • {cert.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Tools section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80 text-lg font-semibold"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-squre border border-gray-400 rounded-lg
                    cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black p-2 h-12 sm:h-14 dark:border-white dark:hover:shadow-white"
              >
                <Image src={tool} alt="Tool" className="w-7 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
      
    