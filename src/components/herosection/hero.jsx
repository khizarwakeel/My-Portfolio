"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../3D-Model/Scene";

const Hero = () => {
  return (
    <div className="pt-14 w-[90%] mx-auto">
      <div className="p-10 lg:bg-gradient-to-r from-[#4e1daa] via-[#8b11d6] to-[#9a10e2] lg:shadow-lg lg:rounded-3xl">
        <div className="grid py-10 lg:grid-cols-2 gap-10">
          <div className=" text-white">
            <h1 className="text-xl md:text-5xl uppercase">Stixor</h1>
            <h1 className="text-xl md:text-5xl uppercase">Technologies</h1>
            <p className="text-base pt-5 lowercase font-thin">
              We come up with creative solutions using the latest technologies
            </p>
          </div>
          <div className="h-96">
            <Canvas>
              <OrbitControls enableZoom={true} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 0]} intensity={1} />
              <Model />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;