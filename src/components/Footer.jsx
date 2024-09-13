import React from 'react';
import { BackgroundBeams } from './ui/background-beams';

function Footer() {
  return (
    <footer className="bg-neutral-950  text-white py-10 relative antialiased " >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Welcome to our Music School, where creativity and passion for music come together. 
              With over a decade of experience in teaching students of all ages, we aim to inspire 
              and nurture your musical talents. Our experienced instructors provide lessons for various 
              instruments including guitar, piano, drums, and vocals. Whether you're a beginner looking 
              to learn the basics or an advanced musician seeking to hone your skills, our customized 
              lesson plans cater to your needs. Our mission is to help students of all ages and skill 
              levels discover the joy of music. Join us and start your musical journey today. At our 
              school, music is more than just notes – it's a way of life!
            </p>
          </div>
          {/* Contact Us Section */}
          <div className="col-span-1 md:col-span-2 text-end">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              Phone: 78761-35383 <br />
              Email: cashu853@gmail.com
            </p>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
          © 2024 Sushant. All rights reserved.
        </div>
      </div>
      <BackgroundBeams />
    </footer>
  );
}

export default Footer;
