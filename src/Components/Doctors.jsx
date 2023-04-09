import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Doctors = () => {
  const members = [
    {
      id:1,
      img: <img src="./herologofin.png" alt="" className="w-[15vw]"/>,
      name:"Dr. Shawn",
      speciality:"Cardiology",
    },
    {
      id:2,
      img: <img src="./herologofin.png" alt="" className="w-[15vw]"/>,
      name:"Dr. Shawn",
      speciality:"Cardiology",
    },
    {
      id:3,
      img: <img src="./herologofin.png" alt="" className="w-[15vw]"/>,
      name:"Dr. Shawn",
      speciality:"Cardiology",
    },
    {
      id:4,
      img: <img src="./herologofin.png" alt="" className="w-[15vw]"/>,
      name:"Dr. Shawn",
      speciality:"Cardiology",
    },
    {
      id:5,
      img: <img src="./herologofin.png" alt="" className="w-[15vw]"/>,
      name:"Dr. Shawn",
      speciality:"Cardiology",
    },
    {
      id:6,
      img: <img src="./herologofin.png" alt="" className="w-[15vw]"/>,
      name:"Dr. Shawn",
      speciality:"Cardiology",
    },
  ];
  return (
    <div
      className="h-auto bg-[#d9faff] flex flex-col justify-evenly"
      id="Doctors"
    >
      <div className="title1 flex flex-col items-center gap-5">
        <h1 className="sm:text-lg text-sm text-[#038f8c] font-bold sm:block hidden">
          Expert doctors dedicated to providing exceptional healthcare for all.
        </h1>
        <h1 className="sm:text-4xl text-2xl font-bold text-[#038f8c]">
          Our Doctors
        </h1>
      </div>
      <div className="doctors flex flex-col sm:flex-wrap sm:flex-row justify-around gap-3 sm:gap-0 my-2 sm:my-0">
        {members.map((m) => (
          <div
            className="doctor w-[70%] sm:w-[30vw] mx-auto sm:mx-none p-2 rounded-3xl flex flex-col gap-3"
            id="hero"
          >
            <div className="img mx-auto">{m.img}</div>
            <div className="desc flex flex-col items-center bg-[#fefefe] border-2 border-[#038f8c] p-1 rounded-3xl">
              <div className="name text-white">
                <h2 className="text-xl font-bold text-black">{m.name}</h2>
              </div>
              <div className="speciality">
                <h2 className="text-md font-bold text-gray-500">
                  {m.speciality}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
