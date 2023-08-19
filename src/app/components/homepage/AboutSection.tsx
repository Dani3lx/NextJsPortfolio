'use client'
import React from 'react'
import Spline from '@splinetool/react-spline';

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


import { motion } from "framer-motion"
import SkillIcon from '../Elements/SkillIcon'

function AboutSection() {
    return (
        <>
            <div className='w-screen py-24 bg-[#eeeeee5d] dark:bg-[#1212125d]' id='about'>
                <motion.div className='flex flex-col justify-center items-center w-full h-fit gap-16 px-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <h1 className='dark:blue-gradient font-bold text-[40px] lg:text-[60px] z-10 text-shadow-blue drop-shadow-blue'>About Me.</h1>
                    <div className='flex w-full max-lg:flex-col'>
                        <div className='lg:w-1/2 max-w-[800px] max-h-[600px] lg:-mt-16 max-lg:hidden'>
                            <Spline scene="https://prod.spline.design/Gbs38D6rSTrtN871/scene.splinecode" />
                        </div>
                        <div className='w-full lg:w-1/2 gap-12 flex flex-col'>
                            <div className='flex flex-col md:flex-row justify-center items-center w-full h-fit gap-10'>
                                <div className='flex flex-col justify-center items-center h-fit gap-10 w-4/5 md:gap-10 sm:px-10 sm:py-5 xl:px-20 xl:py-10   dark:sm:bg-[#080808] sm:bg-[#eaeaea]  border-[#a0a0a026] sm:border-[0.1px] rounded-3xl xl:ml-12'>
                                    <div>
                                        <h1 className='dark:text-white font-semibold text-[20px] md:text-[30px] text-left md:text-left'>I&apos;m a student,</h1>
                                        <h1 className='dark:text-gray text-[15px] text-left'>Currently a third-year undergraduate student enrolled at the University of Toronto, working towards completing the Computer Science Specialist program alongside a minor in Mathematics.</h1>
                                    </div>

                                    <div>
                                        <h1 className='dark:text-white font-semibold text-[20px] md:text-[30px] text-left md:text-left'>I&apos;m a developer,</h1>
                                        <h1 className='dark:text-gray text-[15px] text-left'>Enthusiastic about crafting and building visually appealing and responsive full stack web applications.</h1>
                                    </div>

                                    <div>
                                        <h1 className='dark:text-white font-semibold text-[20px] md:text-[30px] text-left md:text-left'>Fun Facts:</h1>
                                        <h1 className='dark:text-gray text-[15px] text-left'>- I am proficient in playing the piano and have achieved a level 10 ranking in the RCM (Royal Conservatory of Music) program.</h1>
                                        <h1 className='dark:text-gray text-[15px] text-left'>
                                            - I am actively engaged in competitive video gaming and participate in collegiate Overwatch tournaments.</h1>
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
                        </div>

                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default AboutSection
