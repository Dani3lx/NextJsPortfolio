'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Navlink from './Navlink';
import Link from 'next/link';

import { motion, AnimatePresence } from "framer-motion"
import Logo from '../../assets/images/Logo'
import Bar from '../../assets/images/bars.svg'
import Cross from '../../assets/images/times.svg'
import NavlinkMobile from './NavlinkMobile'

const ChangeTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function Navbar() {
  const [dark, setDark] = useState<boolean>(true);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(prev => !prev);
  }

  useEffect(() => {
    dark ? localStorage.theme = 'dark' : localStorage.theme = 'light';
    ChangeTheme()
  }, [dark])

  return (
    <>
      <AnimatePresence>
        <div className='fixed w-screen z-50'>
          <div className={`w-screen bg-[rgba(243,243,243,0.91)] dark:bg-[rgba(0,0,0,0.9)] h-13 px-5 md:px-14 flex justify-between items-center ${isActive ? '' : 'border-b'} border-b-light-gray`} >
            {!isActive &&
              <button className='md:hidden' onClick={handleClick}><Image src={Bar} alt='bars' /></button>
            }

            {isActive &&
              <button className='md:hidden' onClick={handleClick}><Image src={Cross} alt='cross' /></button>
            }
            <Link href='/' onClick={() => setIsActive(false)}>
              <Logo />
            </Link>
            <div className="hidden md:flex justify-between w-5/12 lg:gap-20 xl:gap-24 lg:w-fit">
              <Navlink target='Home' />
              <Navlink target='About' />
              <Navlink target='Projects' />
              <Navlink target='Contacts' />
            </div>
            <button onClick={() => {
              setDark(prev => !prev)
            }}>{dark ? <i className="uil uil-sun text-white text-lg"></i> : <i className="uil uil-moon text-lg text-black"></i>}</button>


          </div>
          {isActive &&
            <motion.div className='bg-white dark:bg-black w-screen flex flex-col shadow-md md:hidden z-0'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
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
