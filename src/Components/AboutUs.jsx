import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const AboutUs = () => {
  const carditems = [
    {
      id: 1,
      icon: <SearchIcon sx={{ color: "purple" }} fontSize="large" />,
      title: "Health Complaints",
      text: "Only those who risk going too far can possibly find out how far one can go.",
    },
    {
      id: 2,
      icon: <PersonIcon sx={{ color: "darkblue" }} fontSize="large" />,
      title: "Choose Doctor",
      text: "Only those who risk going too far can possibly find out how far one can go.",
    },
    {
      id: 3,
      icon: <CalendarMonthIcon sx={{ color: "seagreen" }} fontSize="large" />,
      title: "Schedule",
      text: "Only those who risk going too far can possibly find out how far one can go.",
    },
    {
      id: 4,
      icon: <StarHalfIcon sx={{ color: "orange" }} fontSize="large" />,
      title: "Get your solution",
      text: "Only those who risk going too far can possibly find out how far one can go.",
    },
  ];
  return (
    <div className="px-2 py-8 bg-[#f0f0f0] flex flex-col gap-5 sm:items-center justify-evenly w-screen" id="AboutUs">
      <div className="title1 flex flex-col items-center gap-5">
        <h1 className="sm:text-2xl text-lg font-semibold">About us</h1>
        <h1 className="sm:text-4xl md:text-3xl font-bold text-xl">
          Get to know the developers behind this :D
        </h1>
      </div>
      <div className="profile flex flex-col w-full">
        <div
          className="frontend flex bg-[#fefefe] rounded-3xl w-fit p-2 gap-5"
          id="carditem"
        >
          <img
            src="./arjunresumeimg.jpeg"
            alt=""
            className="w-[20vw] rounded-2xl"
          />
          <div className="dets flex flex-col">
            <div className="name text-black font-bold flex flex-col justify-evenly h-full">
              <h1 className="text-3xl">
                Hello{" "}
                <WavingHandIcon className="wave" sx={{ color: "orange" }} />
              </h1>
              <h2 className="text-2xl">
                My name is Abir Banerjee!{" "}
                <EmojiEmotionsIcon sx={{ color: "orange" }} />
              </h2>
              <h2 className="tracking-tighter max-w-[25vw] text-lg">
                - "I'm a front-end wizard conjuring up a platform where patients
                reign supreme over their healthcare data. I obsess over the
                tiniest details, stay hip to the freshest tech trends, and cloak
                everything in layers of privacy and security. It's a bit of a
                wild ride, but I'm spellbound by the magic of it all!"
              </h2>
            </div>
          </div>
        </div>
        <div className="backendwrape w-full flex justify-end">
          <div
            className="backend flex bg-[#fefefe] rounded-3xl w-fit p-2 gap-5 h-full"
            id="carditem"
          >
            <img src="./pratyush.jpg" alt="" className="w-[20vw] rounded-2xl" />
            <div className="dets flex flex-col">
              <div className="name text-black font-bold flex flex-col justify-evenly h-full">
                <h1 className="text-3xl">
                  Hello{" "}
                  <WavingHandIcon className="wave" sx={{ color: "orange" }} />
                </h1>
                <h2 className="text-2xl">
                  My name is Pratyush Nag!{" "}
                  <EmojiEmotionsIcon sx={{ color: "orange" }} />
                </h2>
                <h2 className="tracking-tighter max-w-[25vw] text-lg">
                  - "I'm the backend brain behind a healthcare data management
                  platform where patients have full control over their data. My
                  job? Keeping their info safe and secure while making it
                  easy-peasy for healthcare providers to share. It's a constant
                  balancing act between performance optimization and foolproof
                  security, but it's all in a day's work for this tech ninja."
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
