'use client'
import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Image from 'next/image'
import '@iconscout/unicons/css/line.css';
import { motion } from "framer-motion"
import FooterLink from '../Elements/FooterLink';

function Footer() {
    return (
        <div className='w-screen bg-black px-20 flex justify-center z-10'>
            <motion.div className='flex flex-col xl:flex-row gap-8 justify-between items-center w-3/5 py-10'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}>
                <Image src={Logo} alt="logo" style={{ 'filter': 'drop-shadow(0 0 30px #fff)' }} />
                <div className='flex gap-5'>
                    <FooterLink icon={'linkedin'} name={'linkedin'} link={"https://www.linkedin.com/in/1danielxu/"} />
                    <FooterLink icon={'github'} name={'github'} link={"https://github.com/Dani3lx/"} />
                    <FooterLink icon={'envelope-alt'} name={'email'} link={"mailto:1danielxu@gmail.com"} />
                </div>
            </motion.div>
        </div>
    )
}

export default Footer
