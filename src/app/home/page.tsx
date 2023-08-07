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
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </PageWrapper>
  )
}

export default page
