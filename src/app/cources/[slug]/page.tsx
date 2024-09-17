import { notFound } from 'next/navigation';
import courseData from '@/data/music_courses.json';
import Image from 'next/image';
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
    // <div>
    //   <h1>{course.title}</h1>
    //   <p>{course.description}</p>
    //   <p>Instructor: {course.instructor}</p>
    //   <p>Price: ${course.price}</p>
    //   <Image
    //     src={course.image}
    //     alt={course.title}
    //     width={1000}
    //     height={600}
    //     style={{  borderRadius: '10px', marginTop: '20px' }}
    //   />
    // </div>
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

    <div className="container my-4 mx-auto border">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam libero architecto optio sapiente laboriosam deserunt nobis accusantium earum quaerat aliquam praesentium perferendis nostrum, impedit, eligendi nulla maxime totam ipsa neque repudiandae minus? Aliquid pariatur nemo et atque fugiat ab soluta enim optio praesentium!
    </div>
    </>
  );
}
