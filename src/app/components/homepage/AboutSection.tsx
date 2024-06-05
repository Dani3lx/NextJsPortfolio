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

import SkillIcon from '../Elements/SkillIcon'

function AboutSection() {
    return (
        <>
            <div className='py-24 bg-[#eeeeee5d] dark:bg-[#1212125d]' id='about'>
                <div className='flex flex-col justify-center items-center h-fit gap-16'>
                    <h1 className='dark:blue-gradient font-bold text-[40px] lg:text-[60px] z-10 text-shadow-blue drop-shadow-blue'>About Me.</h1>
                    <div className='gap-12 flex flex-col z-30 justify-center items-center'>
                        <div className='text-center text-black/90 items-center text-xl md:w-2/3 dark:text-white flex flex-col px-24 py-24 gap-10 justify-center dark:sm:bg-[#080808c0] sm:bg-[#f3f3f3a0]  border-[#a0a0a026] sm:border-[0.1px] rounded-lg'>
                            <h1>I am a 4th year computer science major studying at the University of Toronto.</h1>
                            <hr className='w-[24px] text-black/50'></hr>
                            <h1>My passion lies in full stack development, AI/machine learning, and game development.
                                I enjoy messing around with python automation, make club website for school clubs, and learning new technologies.</h1>
                            <hr className='w-[24px] text-black/50'></hr>
                            <h1>In my free time, I like to eat good food around the city, play video games, and play the piano.</h1>
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
        </>
    )
}

export default AboutSection
