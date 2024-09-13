'use client'
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
  {
    quote: "Attending this music school changed my life! The instructors are incredibly skilled, and the environment is perfect for creativity.",
    name: "John Smith",
    title: "Professional Guitarist",
  },
  {
    quote: "The vocal training I received here was phenomenal! The personalized attention helped me find my voice and build my confidence on stage.",
    name: "Emily Johnson",
    title: "Aspiring Singer",
  },
  {
    quote: "From music theory to production techniques, this school covers it all. The hands-on learning approach and modern facilities are ideal for aspiring professionals.",
    name: "Michael Lee",
    title: "Music Producer",
  },
  {
    quote: "I’ve been teaching piano for years, but this school deepened my understanding of music. The supportive community made learning a truly enjoyable experience.",
    name: "Sarah Davis",
    title: "Piano Instructor",
  },
  {
    quote: "The drumming classes here are top-notch. I’ve never been more confident in my abilities thanks to the great instructors.",
    name: "David Martinez",
    title: "Student Drummer",
  },
  {
    quote: "This music school offers a diverse range of courses. Whether you’re a beginner or an experienced musician, there’s always something new to learn here.",
    name: "Rachel Green",
    title: "Music Enthusiast",
  },
];


function TestimonialCards() {
  return (
    <div className='h-[40rem] w-full  dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mb-9'>Hear our Harmony: Voices of success</h2>
      <div className='flex justify-center w-full overflow-hidden px-3 sm:px-6 lg:px-8 xl:px-10'> 
        <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards