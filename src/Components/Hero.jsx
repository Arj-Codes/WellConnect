import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const detitems = [
    {
      id: 1,
      name: "Date",
      icon: <CalendarMonthIcon fontSize="small" />,
      text: "08 April 2023",
    },
    {
      id: 2,
      name: "Doctor",
      icon: <PersonIcon fontSize="small" />,
      text: "Dr. Souza",
    },
    {
      id: 3,
      name: "Location",
      icon: <LocationOnIcon fontSize="small" />,
      text: "Jaipur,RJ",
    },
  ];
  const extraitems = [
    {
      id: 1,
      name: "250+",
      text: "Healthcare Partners",
    },
    {
      id: 2,
      name: "100+",
      text: "Patients helped",
    },
    {
      id: 3,
      name: "96+",
      text: "Loyal Clients",
    },
  ];
  return (
    <div className="h-[100vh] relative" id="Hero">
      <div className="wrapper h-full p-5 flex w-full">
        <div className="left flex flex-col w-[50%] h-[60%] sm:justify-around sm:my-auto gap-10">
          <TypeAnimation
            sequence={[
              "",
              100,
              "Welcome", 
              500, 
              "Welcome to", 
              500, 
              "Welcome to WellConnect!",
              500, 
              () => {
                console.log("Sequence completed"); 
              },
            ]}
            wrapper="span"
            cursor={false}
            repeat={0}
            style={{ fontSize: "3em", display: "inline-block", margin:"auto", }}
          />
          <div className="title flex flex-col justify-start mx-auto text-3xl lg:text-5xl">
            <h1 className=" font-bold text-[#0ebad1]">We Take Care</h1>
            <h1 className=" font-bold whitespace-nowrap">of Your Healthy</h1>
            <h1 className=" font-bold">Health</h1>
          </div>
          <div className="dets mx-auto flex bg-[white] rounded-2xl border border-[#393939] p-2 w-fit gap-10">
            <div className="left flex gap-4">
              {detitems.map((d) => (
                <div className="detitem flex flex-col text-xs items-center gap-1 justify-center">
                  <div className="row1 flex gap-1 items-center">
                    <div className="icon">{d.icon}</div>
                    <div className="name">
                      <h1 className="">{d.name}</h1>
                    </div>
                  </div>
                  <div className="row2 flex">
                    <div className="text">
                      <h1>{d.text}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="right">
              <button className="text-sm p-2 bg-[#07a2a4] text-white rounded-2xl hover:bg-[#06888a]">
                Get Started
              </button>
            </div>
          </div>
          <div className="extra">
            <div className="wrapper flex p-2 w-fit sm:gap-10 gap-5 mx-auto">
              {extraitems.map((e) => (
                <div className="extraitem flex flex-col">
                  <div className="name lg:text-4xl md:text-2xl text-lg font-bold sm:text-[#0ebad1] text-[#393939]">
                    <h1 classname="">{e.name}</h1>
                  </div>
                  <div className="">{e.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right absolute right-0 lg:right-10 bottom-0">
          <img
            src="./herologofin.png"
            alt=""
            className="lg:h-[80vh] md:h-[70vh] h-[50vh]"
            id="herologo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
Hero;
