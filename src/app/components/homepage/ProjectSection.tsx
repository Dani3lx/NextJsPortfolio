'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion"

import FirstPortfolio from '../../assets/images/projects/firstPortfolio.png'
import ReactPortfolio from '../../assets/images/projects/reactPortfolio.png'
import Csc207 from '../../assets/images/projects/csc207.png'
import Awm from '../../assets/images/projects/awm.png'
import PdfEditor from '../../assets/images/projects/pdf-editor.png'
import Project from '../Elements/Project'

function ProjectSection() {
    const [current, setCurrent] = useState(false);
    return (
        <>  
            <div className='w-screen py-20 bg-[#f2f2f2ee] dark:bg-[#080808c7] border-[#fff] dark:border-[#a0a0a026] border-[0.1px]' id='projects'>
                <motion.div className='flex flex-col justify-center items-center w-full h-fit gap-5 px-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <h1 className='dark:purple-gradient pb-7 font-bold text-[40px] z-10 text-shadow-purple drop-shadow-purple lg:text-[60px]'>Projects.</h1>
                    <div className='flex w-full md:justify-center'>
                        <button
                            className={`ease-in duration-200 rounded-md px-2 py-1 sm:px-6 sm:py-3 ${!current ? "text-white dark:text-black bg-black dark:bg-white" : 'dark:text-white '}`}
                            onClick={() => setCurrent(false)}>Completed</button>
                        <button
                            className={`ease-in duration-200 rounded-md px-2 py-1 sm:px-6 sm:py-3  ${current ? "text-white dark:text-black bg-black dark:bg-white" : 'dark:text-white '}`}
                            onClick={() => setCurrent(true)}>Ongoing</button>
                    </div>
                    {!current && <div className='flex flex-col justify-center items-center'>
                        <Project name='React Portfolio' img={ReactPortfolio} link='https://danielxu.netlify.app/' description='A portfolio website created using React.' techs={['React', 'Javascript', 'HTML', 'CSS']} />
                        <Project name='Terminal Video Sharing System' img={Csc207} link='https://github.com/Dani3lx/Video-Entertainment-System/tree/master/phase2' description='An application that performs CRUD operations on video metadata through the terminal.' techs={['Java', 'Git']} />
                        <Project name='First Portfolio' img={FirstPortfolio} link='https://dani3lx.github.io/Portfolio/' description='My first portfolio website created using vanilla HTML, CSS and Javascript.' techs={['HTML', 'CSS', 'Javascript']} />
                    </div>}

                    {current && <div className='flex flex-col justify-center items-center'>
                        <Project name='UofT AWM' img={Awm} link='https://uoft-awm-web.vercel.app/' description='The official UofT AWM club website.' techs={['NextJs', 'Typescript', 'CSS & tailwindcss']} />
                        <Project name='PDF Editor' img={PdfEditor} link='https://pdf-editor-8hrp1yl4v-98zhaojeffrey.vercel.app/' description='A PDF editor with user dashboard and cloud storage.' techs={['NextJs', 'Prisma', 'MongoDB', 'Typescript', 'CSS & tailwindcss']} />
                    </div>}


                </motion.div>
            </div>
        </>
    )
}

export default ProjectSection
