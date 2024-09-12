"use client";
import React from "react";
import courseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

// making custom data type
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedSection() {
  const featuredCources = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className=" text-teal-600 tracking-wide text-2xl  font-semibold">
            FEATURED COURSES
          </h2>
          <p className="my-4 xl:my-10 text-3xl leading-8 font-extrabold text-white md:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>

      <div className="mt-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCources.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden h-full  flex flex-col ">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow my-5">
                    {course.description}
                  </p>
                  <Link href={`/cources/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href={"/courses"}>
          <button className="px-4 py-3 rounded border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Cources
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
