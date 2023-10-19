"use client";
import { Canvas } from "@react-three/fiber";
import Boxdemo from "../boxdemo";
import { OrbitControls } from "@react-three/drei";
const Hero = () => {
  return (
    <div className="pt-2">
      <div className="p-10 h-[84vh] bg-gradient-to-r from-[#4e1daa] via-[#8b11d6] to-[#9a10e2] rounded-3xl max-w-[77rem] mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="text-5xl text-white">
            <h1 className="uppercase">Stixor</h1>
            <h1 className="uppercase">Technologies</h1>
            <p className="text-base pt-5 lowercase">
              We come up with creative solutions using the latest technologies
            </p>
          </div>
          <div className="h-96">
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} intensity={2} />
              <Boxdemo />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
