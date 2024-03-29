'use client'
import React, { useState } from 'react'

import FirstPortfolio from '../../assets/images/projects/firstPortfolio.png'
import ReactPortfolio from '../../assets/images/projects/reactPortfolio.png'
import Csc207 from '../../assets/images/projects/csc207.png'
import Awm from '../../assets/images/projects/awm.png'
import PdfEditor from '../../assets/images/projects/pdf-editor.png'
import Covision from '../../assets/images/projects/covision.png'

import Project from '../Elements/Project'
import Link from 'next/link'

function ProjectSection() {
    const [current, setCurrent] = useState(false);
    return (
        <>
            <div className='w-screen py-20 bg-[#f2f2f2ee] dark:bg-[#080808c7] border-[#fff] dark:border-[#a0a0a026] border-[0.1px]' id='projects'>
                <div className='flex flex-col justify-center items-center w-full h-fit gap-5 px-5'>
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
                        <Project name='UofT AWM' img={Awm} link='https://uoftawm.ca/' description='The official UofT AWM club website.' techs={['NextJs', 'Typescript', 'CSS & tailwindcss']} />
                        <Project name='React Portfolio' img={ReactPortfolio} link='https://danielxu.netlify.app/' description='A portfolio website created using React.' techs={['React', 'Javascript', 'HTML', 'CSS']} />
                        <Project name='Terminal Video Sharing System' img={Csc207} link='https://github.com/Dani3lx/Video-Entertainment-System/tree/master/phase2' description='An application that performs CRUD operations on video metadata through the terminal.' techs={['Java', 'Git']} />
                        <Project name='First Portfolio' img={FirstPortfolio} link='https://dani3lx.github.io/Portfolio/' description='My first portfolio website created using vanilla HTML, CSS and Javascript.' techs={['HTML', 'CSS', 'Javascript']} />
                        <Project name='CO(VISION)' img={Covision} link='https://github.com/victor-zheng-codes/CSC110-Project' description='A python app that anaylzes the impact of COVID-19 on various industries using data extracted from governement datasets.' techs={['Python', 'Pygame', 'Matplotlib']}/>
                    </div>}

                    {current && <div className='flex flex-col justify-center items-center'>
                        <Project name='PDF Editor' img={PdfEditor} link='https://pdf-editor-8hrp1yl4v-98zhaojeffrey.vercel.app/' description='A PDF editor with user dashboard and cloud storage.' techs={['NextJs', 'Prisma', 'MongoDB', 'Typescript', 'CSS & tailwindcss']} />
                    </div>}
                    <Link href={'https://drive.google.com/drive/folders/14pI22r4kC1jvOIVZ-58v5-0abjFPT2N5?usp=sharing'} target='_blank' className='dark:text-white hover:scale-105 active:scale-95'>Check out my resume <i className="uil uil-arrow-right"></i></Link>

                </div>
            </div>
        </>
    )
}

export default ProjectSection
