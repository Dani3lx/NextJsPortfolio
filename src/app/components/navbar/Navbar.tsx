'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Navlink from './Navlink';
import Link from 'next/link';

import { motion, AnimatePresence } from "framer-motion"
import Logo from '../../assets/images/Logo.svg'
import Bar from '../../assets/images/bars.svg'
import Cross from '../../assets/images/times.svg'
import NavlinkMobile from './NavlinkMobile'


function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(prev => !prev);
  }
  return (
    <>
      <AnimatePresence>
        <div className='fixed w-screen z-50'>
          <div className={`w-screen bg-black h-13 px-5 md:px-14 flex justify-between items-center ${isActive ? '' : 'border-b'} border-b-light-gray`} >
            <Link href='/' onClick={() => setIsActive(false)}><Image src={Logo} alt='awm-logo' /></Link>
            <div className="hidden md:flex justify-between w-5/12 lg:gap-20 xl:gap-24 lg:w-fit">
              <Navlink target='Home' />
              <Navlink target='About' />
              <Navlink target='Projects' />
              <Navlink target='Contacts' />
            </div>
            {!isActive &&
              <button className='md:hidden' onClick={handleClick}><Image src={Bar} alt='bars' /></button>
            }

            {isActive &&
              <button className='md:hidden' onClick={handleClick}><Image src={Cross} alt='cross' /></button>
            }
          </div>
          {isActive &&
            <motion.div className='bg-black w-screen flex flex-col shadow-md md:hidden z-0'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ stiffness: 1, duration: 0.25 }}>
              <NavlinkMobile target='Home' setIsActive={setIsActive} />
              <NavlinkMobile target='About' setIsActive={setIsActive} />
              <NavlinkMobile target='Projects' setIsActive={setIsActive} />
              <NavlinkMobile target='Contacts' setIsActive={setIsActive} />
            </motion.div>
          }
        </div>
      </AnimatePresence>
    </>
  )
}
export default Navbar
