'use client'
import React from 'react'
import PageWrapper from '../PageWrapper'
import HeroSection from '../components/homepage/HeroSection'
import AboutSection from '../components/homepage/AboutSection'
import ProjectSection from '../components/homepage/ProjectSection'
import ContactSection from '../components/homepage/ContactSection'

function page() {
  return (
    <PageWrapper>
      <div className='bg-gradient-to-r from-[#f9e7ff] dark:from-[#14091a] from-10% via-[#ffe2c4] dark:via-[#291c0f] via-50% to-[#bde4ff] dark:to-[#0a1b28] to-90% duration-150 ease-in'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </PageWrapper>
  )
}

export default page
