import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'

function HeroSection() {
  return (
    <div
    className='h-auto md:h-[40rem] xl:h-[100vh] w-full rounded-md flex  items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0'
    >
        <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
        className="top-40 left-6 md:left-60 md:-top-20"
        fill="white"
      />
            <h1 className='mt-20 md:mt-0  text-4xl md:text-7xl font-bold text-transparent  bg-clip-text bg-gradient-to-b from-neutral-50 to-red-400'> Master the art of music</h1>
            <p
            className='mt-6 font-normal text-base md:text-lg text-neutral-300 mx-auto max-w-lg'
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, veritatis fuga delectus asperiores saepe, corrupti at reiciendis ipsa omnis nulla itaque pariatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, magni, laborum reiciendis, ducimus suscipit quaerat velit cum enim reprehenderit blanditiis harum quia.
            </p>
            <div className='mt-8'>
                <Link href={'/courses'}>
                Explore Cources
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection