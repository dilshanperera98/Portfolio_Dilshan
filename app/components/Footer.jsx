import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center '>
        <Image src={isDarkMode ? assets.hirusha_logo_dark : assets.hirusha_logo} alt='' className='w-36 mx-auto mb-2 ' />
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            mldperera1998@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>
        <p>Copy right.All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 '>
            {/* <li><a target='_blank' href="https://github.com/Hirusha1-cpu">GitHub</a></li> */}
            <li><a target='_blank' href="https://www.linkedin.com/posts/dilshan-perera-552370213_amazon-redshift-activity-7275846153454153729-rLaG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADX7Dg4B2cUMdzueVv0tlx9fraT3aDq40ys">LinkedIn</a></li>
            {/* <li><a target='_blank' href="https://github.com/Hirusha1-cpu">Instagram</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Footer

hb










