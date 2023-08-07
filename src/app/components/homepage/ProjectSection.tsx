'use client'
import React from 'react'
import { motion } from "framer-motion"

import FirstPortfolio from '../../assets/images/projects/firstPortfolio.png'
import ReactPortfolio from '../../assets/images/projects/reactPortfolio.png'
import Csc207 from '../../assets/images/projects/csc207.png'
import Awm from '../../assets/images/projects/awm.png'
import PdfEditor from '../../assets/images/projects/pdf-editor.png'
import Project from '../Elements/Project'

function ProjectSection() {
    return (
        <>
            <div className='w-screen py-20 bg-[#080808] border-[#a0a0a026] border-[0.1px]' id='projects'>
                <motion.div className='flex flex-col justify-center items-center w-full h-fit gap-20 px-5'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}>
                    <h1 className='purple-gradient font-bold text-[40px] z-10 text-shadow-purple drop-shadow-purple lg:text-[60px]'>Projects</h1>
                    <div>
                        <h1 className='text-white font-semibold text-[30px] text-center pb-5'>My latest works</h1>
                        <div className='flex flex-col justify-center items-center'>
                            <Project name='React Portfolio' img={ReactPortfolio} link='https://danielxu.netlify.app/' />
                            <Project name='Terminal Video Sharing System' img={Csc207} link='https://github.com/Dani3lx/Video-Entertainment-System/tree/master/phase2' />
                            <Project name='First Portfolio' img={FirstPortfolio} link='https://dani3lx.github.io/Portfolio/' />

                        </div>
                        <h1 className='text-white font-semibold text-[30px] text-center pt-20 pb-5'>My current works</h1>
                        <div className='flex flex-col justify-center items-center'>
                            <Project name='UofT AWM' img={Awm} link='https://uoft-awm-web.vercel.app/' />
                            <Project name='PDF Editor' img={PdfEditor} link='https://pdf-editor-8hrp1yl4v-98zhaojeffrey.vercel.app/' />
                        </div>

                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectSection
