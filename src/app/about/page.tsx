import AboutHero from '@/components/AboutHero'
import { GlobeDemo } from '@/components/GlobeDemo'
import React from 'react'

function About() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <div className='h-[100vh] flex items-center justify-center'>
        <AboutHero/>
      </div>
      <div className="container mx-auto mt-5">
        <GlobeDemo/>
      </div>
    </main>
  )
}

export default About