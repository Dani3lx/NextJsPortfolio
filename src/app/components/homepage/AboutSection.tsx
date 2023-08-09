'use client'
import React from 'react'
import Programmer from '../../assets/images/about/Programmer.svg'
import HTML5Icon from '../../assets/images/icons/Html5'
import CSSIcon from '../../assets/images/icons/CSSLogo'
import CIcon from '../../assets/images/icons/CIcon'
import JavascriptIcon from '../../assets/images/icons/Javascript'
import ReactIcon from '../../assets/images/icons/ReactIcon'
import NextJSIcon from '../../assets/images/icons/NextJS'
import MongodbIcon from '../../assets/images/icons/MongoDB'
import PostgreSQLIcon from '../../assets/images/icons/Postgresql'
import GitIcon from '../../assets/images/icons/Git'
import JavaIcon from '../../assets/images/icons/Java'
import PythonIcon from '../../assets/images/icons/Python'


import Image from 'next/image'
import { motion } from "framer-motion"
import SkillIcon from '../Elements/SkillIcon'

function AboutSection() {
    return (
        <>
            <div className='w-screen py-20' id='about'>
                <motion.div className='flex flex-col justify-center items-center w-full h-fit gap-12 px-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <h1 className='dark:blue-gradient font-bold text-[40px] lg:text-[60px] z-10 text-shadow-blue drop-shadow-blue'>About Me.</h1>
                    <div className='flex flex-col md:flex-row justify-center items-center w-full h-fit gap-10'>
                        <Image
                            className='hidden lg:block z-0 min-w-[300px] max-w-[500px] w-1/2 md:w-1/2 md:max-w-[600px]'
                            src={Programmer} alt='Backdrop'
                        />
                        <div className='flex flex-col justify-center items-center h-fit gap-10 w-3/4 lg:w-1/3 md:gap-10 sm:px-10 sm:py-5 xl:px-20 xl:py-10 dark:sm:bg-[#080808] sm:bg-[#eaeaea] border-[#a0a0a026] sm:border-[0.1px] rounded-3xl xl:ml-12'>
                            <div>
                                <h1 className='dark:text-white font-semibold text-[20px] md:text-[30px] text-left md:text-left'>I&apos;m a student,</h1>
                                <h1 className='dark:text-gray text-[15px] text-left'>Currently a third year undergraduate student studying at the <span className='font-bold'>University of Toronto</span>, pursuing the Computer Science Specialist program as well as a Math Minor.</h1>
                            </div>

                            <div>
                                <h1 className='dark:text-white font-semibold text-[20px] md:text-[30px] text-left md:text-left'>I&apos;m a developer,</h1>
                                <h1 className='dark:text-gray text-[15px] text-left'>Passionate in designing and developing beautiful and responsive full stack web applications.</h1>
                            </div>

                            <div>
                                <h1 className='dark:text-white font-semibold text-[20px] md:text-[30px] text-left md:text-left'>Fun Facts:</h1>
                                <h1 className='dark:text-gray text-[15px] text-left'>I play the piano and have reached level 10 RCM.</h1>
                                <h1 className='dark:text-gray text-[15px] text-left'>
                                    I play video games competitively and competes in collegiate Overwatch tournaments.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        <h1 className='dark:text-gray text-[20px] text-center'>Tools that I use:</h1>
                        <div className='flex gap-3 flex-wrap w-2/3 justify-center items-center'>
                            <SkillIcon icon={<HTML5Icon />} name='HTML5' />
                            <SkillIcon icon={<CSSIcon />} name='CSS' />
                            <SkillIcon icon={<JavascriptIcon />} name='Javascript' />
                            <SkillIcon icon={<ReactIcon />} name='React' />
                            <SkillIcon icon={<NextJSIcon />} name='NextJS' />
                            <SkillIcon icon={<MongodbIcon />} name='Mongodb' />
                            <SkillIcon icon={<PostgreSQLIcon />} name='PostgreSQL' />
                            <SkillIcon icon={<GitIcon />} name='Git' />
                            <SkillIcon icon={<JavaIcon />} name='Java' />
                            <SkillIcon icon={<CIcon />} name='C' />
                            <SkillIcon icon={<PythonIcon />} name='Python' />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default AboutSection
