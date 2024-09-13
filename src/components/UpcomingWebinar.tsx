'use client'
import React from 'react'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinar() {

    const featuredWebinars = [
        {
          title: "Mastering Guitar Techniques",
          description: "Learn advanced guitar techniques from world-renowned artists in this exclusive webinar.",
          slug: "mastering-guitar-techniques",
          isfeatured: true,
        },
        {
          title: "Music Production Basics",
          description: "Explore the fundamentals of music production and take your first step towards producing your own tracks.",
          slug: "music-production-basics",
          isfeatured: true,
        },
        {
          title: "Vocal Mastery Workshop",
          description: "Enhance your vocal skills with expert guidance on voice control, range, and performance techniques.",
          slug: "vocal-mastery-workshop",
          isfeatured: false,
        },
        {
          title: "Composing for Films and TV",
          description: "Delve into the art of composing music for films and television with industry professionals.",
          slug: "composing-for-films-and-tv",
          isfeatured: true,
        },
        {
          title: "Jazz Improvisation Techniques",
          description: "Unlock the secrets of jazz improvisation and learn how to perform confidently in any jazz ensemble.",
          slug: "jazz-improvisation-techniques",
          isfeatured: false,
        },
        {
          title: "Electronic Music and DJing",
          description: "Get an introduction to the world of electronic music production and DJing with cutting-edge tools.",
          slug: "electronic-music-and-djing",
          isfeatured: true,
        }
      ];
      
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className=" text-teal-600 tracking-wide text-2xl  font-semibold">
            FEATURED Webinars
          </h2>
          <p className="my-4 xl:my-10 text-3xl leading-8 font-extrabold text-white md:text-4xl">
           Enhanse your music journey
          </p>
        </div>
      </div>

      <div className="mt-11 mx-8">
        
         <HoverEffect
         items={featuredWebinars.map(webinar=>(
            {
                title:webinar.title,
                description:webinar.description,
                link:'/',
            }
         ))}
         />

        
      </div>

      <div className="mt-8 flex justify-center">
        <Link href={"/courses"}>
          <button className="px-4 py-3 rounded border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Webinars
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UpcomingWebinar