'use client'
import React from 'react'
import Programmer from '../../assets/images/about/Programmer.svg'
import HTML5Icon from '../../assets/images/icons/html5.svg'
import CSSIcon from '../../assets/images/icons/css-logo.svg'
import CIcon from '../../assets/images/icons/c.svg'
import JavascriptIcon from '../../assets/images/icons/javascript.svg'
import ReactIcon from '../../assets/images/icons/react.svg'
import NextJSIcon from '../../assets/images/icons/nextjs.svg'
import MongodbIcon from '../../assets/images/icons/mongodb.svg'
import PostgreSQLIcon from '../../assets/images/icons/postgresql.svg'
import GitIcon from '../../assets/images/icons/git.svg'
import JavaIcon from '../../assets/images/icons/java.svg'
import PythonIcon from '../../assets/images/icons/python.svg'


import Image from 'next/image'
import { motion } from "framer-motion"
import SkillIcon from '../Elements/SkillIcon'

function AboutSection() {
    return (
        <>
            <div className='w-screen py-20' id='about'>
                <motion.div className='flex flex-col justify-center items-center w-full h-full gap-20 px-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <h1 className='blue-gradient font-bold text-[40px] z-10 text-shadow-blue drop-shadow-blue'>Who Am I?</h1>
                    <Image
                        className='z-0 w-3/4 opacity-70'
                        src={Programmer} alt='Backdrop'
                    />

                    <div>
                        <h1 className='text-white font-semibold text-[30px] text-center'>A student</h1>
                        <h1 className='text-gray text-[20px] text-center'>Currently a third year undergraduate student studying at the <span className='text-primary-blue'>University of Toronto</span>, pursuing the Computer Science Specialist program as well as a Math Minor.</h1>
                    </div>

                    <hr className='text-white w-1/3'></hr>

                    <div>
                        <h1 className='text-white font-semibold text-[30px] text-center'>A developer</h1>
                        <h1 className='text-gray text-[20px] text-center'>Passionate in designing and developing beautiful and responsive full stack web applications.</h1>
                    </div>

                    <hr className='text-white w-1/3'></hr>

                    <div>
                        <h1 className='text-white font-semibold text-[30px] text-center'>Fun Facts</h1>
                        <h1 className='text-gray text-[20px] text-center'>I play the piano and have reached level 10 RCM.</h1>
                        <h1 className='text-gray text-[20px] text-center'>
                            I play video games competitively and competes in collegiate Overwatch tournaments.</h1>
                    </div>

                    <hr className='text-white w-1/3'></hr>

                    <div className='flex flex-col justify-center items-center gap-5 w-full'>
                        <h1 className='text-gray text-[20px] text-center'>Tools that I use:</h1>
                        <div className='flex gap-3 flex-wrap w-2/3 justify-center items-center'>
                            <SkillIcon icon={HTML5Icon} name='HTML5' />
                            <SkillIcon icon={CSSIcon} name='CSS' />
                            <SkillIcon icon={JavascriptIcon} name='Javascript' />
                            <SkillIcon icon={ReactIcon} name='React' />
                            <SkillIcon icon={NextJSIcon} name='NextJS' />
                            <SkillIcon icon={MongodbIcon} name='Mongodb' />
                            <SkillIcon icon={PostgreSQLIcon} name='PostgreSQL' />
                            <SkillIcon icon={GitIcon} name='Git' />
                            <SkillIcon icon={JavaIcon} name='Java' />
                            <SkillIcon icon={CIcon} name='C' />
                            <SkillIcon icon={PythonIcon} name='Python' />
                        </div>
                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default AboutSection
