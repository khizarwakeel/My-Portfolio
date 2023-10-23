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
          }  fixed bg-gradient-to-r from-[#5d109e] via-[#741ac1] shadow-2xl to-[#5d109e] w-[100vw] md:w-[45vw] lg:w-[32vw] xl:w-[25vw] h-screen pt-5`}
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
              className="w-8 h-8 text-white hover:text-fuchsia-400 cursor-pointer ml-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="w-72 mx-auto">
            <div className="pt-10 uppercase text-xl font-medium">
              <ul>
                <li className="border-b-4 cursor-pointer text-white border-[#9217ca] w-72 pb-2 mb-8">
                  Home
                </li>
                <li className="border-b-4 cursor-pointer text-gray-400 hover:text-white transition duration-700 ease-in-out  border-[#9217ca] w-72 pb-2 mb-8">
                  About Me
                </li>
                <li className="border-b-4 cursor-pointer text-gray-400 hover:text-white transition duration-700 ease-in-out  border-[#9217ca] w-72 pb-2 mb-8">
                  My Projects
                </li>
                <li className="border-b-4 cursor-pointer text-gray-400 hover:text-white transition duration-700 ease-in-out  border-[#9217ca] w-72 pb-2 mb-8">
                  Contact Me
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;