import React from "react";
import Image from "next/image";
import bgImg from '../public/bg.png'

const Home = () => {
  return (
    <main className="w-[90%] m-auto">
      <section className="flex justify-between">
        <div className="w-full  lg:w-[48%] md:w-[48%] relative">
          <h1 className="text-[200px] opacity-10 font-black leading-10 absolute top-0">Read.</h1>
          <p className="text-[14px] p-2 px-6 border border-[#B840F9] text-[#B840F9] rounded-full inline-block mt-4">
            {" "}
            One Word. One Moment.
          </p>
          <h2 className="lg:text-[60px] md:text-[42px] text-[24px] font-bold font-montserrat">
            Reading, Reclaimed.
          </h2>
          <div className="text-[20px] font-inter my-6 font-light w-full lg:w-[90%] md:w-[90%]">
          <p>
            Pace turns reading into a deliberate act. Upload any ebook, set your
            reading speed, and consume words one by one — free from distraction,
            scrolling, or skimming.
          </p>
          <p className="mt-3">Reading becomes measured. Progress becomes real.</p>
          
          </div>
           <button className='bg-linear-to-br from-[#5F5DFC] to-[#B840F9] rounded-lg py-3 px-8 w-full lg:w-[60%] md:w-[60%] text-[18px] font-bold'>Get Started</button>
        </div>
        <div className="w-full  lg:w-[48%] md:w-[48%]">
          <Image 
          src={bgImg}
          alt="hero section image"
          width={200}
          height={200}
          className="w-[60%] mx-auto rounded-2xl"
          />
        </div>
      </section>
      <section>
        <div>

        </div>
      </section>
    </main>
  );
};

export default Home;
