"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Interactive Music Lessons",
      description:
        "Engage with your instructors in real time through our interactive lessons. Whether you're practicing an instrument or studying music theory, our platform offers hands-on learning to help you master your skills.",
    },
    {
      title: "Real-Time Feedback",
      description:
        "Get immediate feedback from instructors as you play. Correct mistakes and improve your technique with real-time guidance, ensuring that your practice is effective and efficient.",
    },
    {
      title: "Personalized Practice Plans",
      description:
        "Receive customized practice routines based on your progress. Our platform tracks your improvements and provides tailored exercises to help you reach the next level in your musical journey.",
    },
    {
      title: "Music Theory Made Easy",
      description:
        "Understand the language of music with our step-by-step approach to music theory. From scales to chord progressions, our platform breaks down complex concepts into easy-to-digest lessons.",
    },
    {
      title: "Collaborative Music Sessions",
      description:
        "Collaborate with fellow students in group practice sessions. Share your progress, learn from others, and even perform together, all from the comfort of your home.",
    },
    {
      title: "Track Your Progress",
      description:
        "Stay motivated by tracking your progress over time. Our platform helps you visualize your musical journey and celebrates your achievements with personalized milestones.",
    },
  ];
  
function WhyChooseUs() {
  return (
    <div className=''>
       <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs