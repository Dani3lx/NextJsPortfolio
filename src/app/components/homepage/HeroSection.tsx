'use client'
import React from 'react'
import Backdrop2 from '../../assets/images/home/background-blob2.svg'
import Arrow from '../../assets/images/home/arrow-circle-down.svg'
import Image from 'next/image'
import { motion } from "framer-motion"

function HeroSection() {
    return (
        <>
            <div className='w-screen h-screen relative' id='home'>
                <motion.div className='absolute flex flex-col justify-center items-center w-full h-full '
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <div className='z-10 flex flex-col gap-[0px]'>
                        <h1 className='text-white font-bold text-[70px] lg:text-[90px] -mb-[30px]'>Hey,</h1>
                        <h1 className='text-white font-bold text-[70px] lg:text-[90px] -mb-[30px]'>I am</h1>
                        <h1 className='text-white font-bold text-[70px] lg:text-[90px]'>Daniel.</h1>
                    </div>
                    <Image
                        className='absolute z-0 lg:w-1/3 opacity-70 w-full animate-pulse'
                        src={Backdrop2} alt='Backdrop'
                    />
                    <a href='#about' className='absolute z-10 bottom-10 animate-bounce'>
                        <Image
                            src={Arrow} alt='Down Arrow' className='hover:scale-105 active:scale-95'
                        />
                    </a>
                </motion.div>
            </div>
        </>
    )
}

export default HeroSection
