import { notFound } from 'next/navigation';
import courseData from '@/data/music_courses.json';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
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

// Generate static paths for all available courses
export async function generateStaticParams() {
  return courseData.courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData.courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
   
    <>
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight ">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">{course.title}</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">{course.title}</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>

    <div className="container my-4 mx-auto">
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2 gap-4 bg-gradient-to-b  from-neutral-600 to-neutral-750 items-center">
        <div className=" w-full h-full flex items-center p-3">
          <p>{course.description}</p>
        </div>
        <div className="">
          <img src={course.image} alt={course.title} className='object-contain w-full' />
        </div>

      </div>
    </div>
    </>
  );
}
