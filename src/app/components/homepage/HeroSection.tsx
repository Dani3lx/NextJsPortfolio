import React from 'react'
import Spline from '@splinetool/react-spline';


function HeroSection() {

    return (
        <>
            <div className='absolute w-screen h-screen dark:opacity-80'>
                    <Spline
                        scene="https://prod.spline.design/UZDU8RG0K7EKF9pU/scene.splinecode"
                    />
            </div>
            <div className='w-screen h-screen relative' id='home'>
                <div className='absolute flex flex-col justify-center items-center w-full h-full'>
                    <div className='z-10 flex flex-col gap-[0px] text-[#1f1f1f] dark:text-[#cfcfcf] font-extrabold text-[70px] lg:text-[90px] '>
                        <h1 className='-mb-[30px]'>Hey,</h1>
                        <h1 className='-mb-[30px]'>I am</h1>
                        <h1>Daniel.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection