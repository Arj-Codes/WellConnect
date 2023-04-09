import React, { useState } from "react";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import MenuIcon from "@mui/icons-material/Menu";


import { motion, useScroll } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const { address, isConnecting, isConnected } = useAccount();
  const navitems = ["Home", "Services", "Doctors", "AboutUs"];
  const [toggleNav, changetoggleNav] = useState(false);
  return (
    <nav
      className="navbar sticky z-40  w-[screen] flex sm:justify-around justify-between bg-[#f0f0f0] items-center sm:p-1 px-2 "
      id="navbar"
      style={{ position: "fixed", top: 0, width: "100%" }}
    >
      <div className="left flex items-center">
        <img src="./logo.png" alt="" className="sm:w-[3vw] w-[6vw]" />
        <h1 className="font-bold text-xl">WellConnect</h1>
      </div>
      <div className="navitems sm:flex lg:w-[30%] w-[40%] justify-around hidden">
        <ul className="hidden justify-center w-auto md:flex items-center gap-4">
          {navitems.map((m) => (
            <div>
              <motion.li
                id="navb_icon"
                className="text-md cursor-pointer hover:scale-105 transition duration-300 ease-in hover:font-semibold"
                whileHover={{
                  // scale: 1.05,
                  // textShadow: "0px 0px 4px white",
                  cursor: "pointer",
                }}
              >
                {m === "Home" ? (
                  <LinkS
                    activeClass="active"
                    smooth
                    spy
                    to="Hero"
                    duration={400}
                    exact="true"
                    offset={-50}
                  >
                    {m}
                  </LinkS>
                ) : (
                  <LinkS
                    activeClass="active"
                    smooth
                    spy
                    to={m}
                    duration={500}
                    exact="true"
                    offset={-50}
                  >
                    {m}
                  </LinkS>
                )}
              </motion.li>
              {/* <div className="bg-white h-[0.75px] mt-1"></div> */}
            </div>
          ))}
        </ul>
      </div>
      <div className="right hidden sm:flex">
        <Web3Button />
        {console.log(address)}
      </div>
      <div className="icon sm:hidden flex relative">
        <MenuIcon onClick={() => changetoggleNav(!toggleNav)} />
      </div>
      {toggleNav && (
        <div className="modal absolute top-10 right-2 z-10">
          <div className="navitems bg-[#bfbfbf] p-2 rounded-lg">
            {navitems.map((n) => (
              <div className="navitem hover:border-b-2 hover:border-black transition duration-300 ease-in-out">
                <h2 className="text-md cursor-pointer">{n.text}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
