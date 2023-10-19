"use client";

const Boxdemo = () => {
  return (
    <mesh rotation={[90,0,20]}>
      <boxGeometry args={[3,3,3]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Boxdemo;