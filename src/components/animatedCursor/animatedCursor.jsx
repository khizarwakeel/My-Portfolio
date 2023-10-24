"use client";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };
  return (
    <div className="lg:block hidden">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      ></motion.div>
    </div>
  );
};

export default AnimatedCursor;