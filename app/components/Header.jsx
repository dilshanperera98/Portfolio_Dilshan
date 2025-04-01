import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-5 lg:pt-20  sm:pt-20 max-sm:pt-60 md:pt-30 '>
            <motion.div
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration:0.6, type:'spring', stiffness:100}}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </motion.div>
            <motion.h3
             initial={{y:-30 , opacity:0}}
             whileInView={{y:0,opacity:1}}
             transition={{duration:0.8, delay:0.5}}
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>Hi! I'm Dilshan <Image src={assets.hand_icon} alt='' className='w-6' /> </motion.h3>
            <motion.h1
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.8, delay:0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Associate Database Engineer</motion.h1>
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.7}}
            className='max-w-2xl mx-auto font-Ovo'>
                Explore my portfolio to see how I leverage data, automation, and AI to drive innovation and efficiency. Whether it's optimizing workflows, developing AI-powered systems, or engineering data solutions, I’m always excited to push boundaries and create impact.

                Let’s transform data into intelligence—together!
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-5 mt-10 '>
                <motion.a
                initial={{y:30 , opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6, delay:1}}
                 href="#contact" className="bg-white dark:text-black px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-gray-800 dark:hover:text-white dark:border-white/50 transition-colors duration-500"
                 >Contact me <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
               </motion.a>
                {/* <motion.a
                  initial={{y:30 , opacity:0}}
                  whileInView={{y:0,opacity:1}}
                  transition={{duration:0.6, delay:1.2}}
                href={'Dilshan Perera-CV.pdf'} download className= 'bg-white dark:text-black px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-gray-800 dark:hover:text-white dark:border-white/50 transition-colors duration-500'>
                CV <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
               </motion.a> */}
            </div>
        </div>
    )
}

export default Header
