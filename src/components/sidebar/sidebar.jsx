"use client";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="pt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white hover:text-fuchsia-500 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`top-0 left-0 ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full ease-in-out duration-300"
          }  fixed bg-gradient-to-r from-[#9a10e2] via-[#8b11d6] shadow-2xl to-[#9a10e2] z-40 w-[100vw] lg:w-[25vw] h-full pl-6 pt-5`}
        >
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-white hover:text-fuchsia-400 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 className="text-white pt-10 text-3xl">Stixor Technologies</h1>
        </div>
      )}
    </>
  );
};

export default Sidebar;