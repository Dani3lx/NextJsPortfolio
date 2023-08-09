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
      <div className='bg-[#f7f7f7] dark:bg-[#0c0c0c] bg-grid-light dark:bg-grid duration-150 ease-in'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </PageWrapper>
  )
}

export default page
