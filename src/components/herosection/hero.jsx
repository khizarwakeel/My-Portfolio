"use client";
import animatedData from "../animatedGif/office-guy.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <>
      <div className="pt-14 w-[90%] mx-auto">
        <div className="lg:p-10 p-6 lg:bg-gradient-to-r from-[#4e1daa] via-[#8b11d6] to-[#9a10e2] lg:shadow-lg lg:rounded-3xl">
          <div className="grid py-10 lg:grid-cols-2 gap-10 items-center">
            <div className=" text-white">
              <div className="cursorDesign">
              <h1 className="md:text-5xl text-3xl uppercase">Stixor</h1>
              <h1 className="md:text-5xl text-3xl uppercase">Technologies</h1>
              </div>
              <p className="md:text-xl text-lg pt-5 lowercase font-thin">
                We come up with creative solutions using the latest technologies
              </p>
            </div>
            <div className="h-96 z-0">
              <Lottie loop={true} animationData={animatedData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;