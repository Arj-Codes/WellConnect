import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  useAccount,
  useContract,
  useContractRead,
  useProvider,
  useSigner,
} from "wagmi";
import { NFTStorage } from "nft.storage";
import medicare from "../contracts/medicare.json";
import { Link as LinkR } from "react-router-dom";
import { Web3Button } from "@web3modal/react";

const Services = () => {
  const { isConnected } = useAccount();
  const [connected, setConnected] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [isMinting, setIsMinting] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const VITE_NFT_STORAGE_KEY = import.meta.env.VITE_NFT_STORAGE_KEY;
  const client = new NFTStorage({ token: VITE_NFT_STORAGE_KEY });
  const { address } = useAccount();
  const { data: signerOrProvider } = useSigner();

    const [nfts, setNfts] = useState([]);

    const { data: supply } = useContractRead({
      address: medicare.address,
      abi: medicare.abi,
      functionName: "totalSupply",
    });

  const medicareContract = useContract({
    abi: medicare.abi,
    address: medicare.address,
    signerOrProvider: signerOrProvider,
  });

  useEffect(() => {
    if (isConnected) {
      setConnected(true);
    } else {
      setConnected(false);
    }
    console.log(nfts);
  });
  useEffect(() => {
    const getNFTs = async () => {
      try {
        const nfts = [];
        for (let i = 0; i < supply.toNumber(); i++) {
          const res = await medicareContract?.ownerOf(i);
          if (res.toLowerCase() === address.toLowerCase()) {
            const uri = await medicareContract?.getTokenURI(i);
            const data = await fetch(getCloudflareURL(uri));
            const json = await data.json();
            const nft = { tokenId: i, ...json };
            nfts.push(nft);
          }
        }
        setNfts(nfts);
      } catch (err) {
        console.log(err);
      }
    };
    getNFTs();
  }, [address, medicareContract, supply]);


  const carditems = [
    {
      id: 1,
      icon: <img src="./service1.jpg" alt="" className="rounded-2xl" />,
      title: "Create a prescription",
      text: "Create the required prescription for the patient!",
    },
    {
      id: 2,
      icon: <img src="./service2.jpg" alt="" className="rounded-2xl" />,
      title: "Appointment",
      text: "Schedule an appointment!",
    },
    {
      id: 3,
      icon: <img src="./service3.jpg" alt="" className="rounded-2xl" />,
      title: "Other Specialists",
      text: "Want a second opinion? Here are the specialists I can vouch for!",
    },
  ];
  return (
    <div
      className="h-[100vh] bg-[#c0fdfd] flex flex-col gap-5 items-center justify-evenly sm:py-0 py-2"
      id="Services"
    >
      <div className="title1 flex flex-col items-center gap-5">
        <h1 className="text-lg text-[#038f8c] font-bold">Why Choose Us?</h1>
        <h1 className="text-4xl font-bold text-[#038f8c]">Our Services</h1>
      </div>
      <div className="cards flex justify-evenly md:flex-row flex-col lg:w-[80%] w-full sm:gap-0 gap-5">
        {carditems.map((c) => (
          <div
            className="carditem flex flex-col bg-white rounded-3xl gap-4 lg:w-[18vw] md:w-[30vw] w-[70%] mx-auto sm:mx-none items-center p-4 cursor-pointer"
            id="carditem"
          >
            <div className="icon">{c.icon}</div>
            <div className="title text-md font-bold text-[#00c6c3]">
              {c.title}
            </div>
            <div className="text text-xs tracking-tighter text-[#393939]">
              <h2 className="font-semibold">{c.text}</h2>
            </div>
            {connected && (
              <button className="py-1 px-2 rounded-2xl text-md font-medium bg-[#00a1cd] text-white">
                <a
                  href={`${c.id == 1 ? "/NFT" : (c.id==2 ? "/Appointments" : "/Specialists")}`}
                  className="cursor-pointer py-1 w-full text-center"
                >
                  Use
                </a>
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="more flex flex-col gap-2 justify-center items-center">
        <h1 className="py-2 px-4 rounded-2xl text-md font-medium bg-[#00a1cd] text-white">
          To use the services connect to your wallet!
        </h1>
        <Web3Button />
      </div>
    </div>
  );
};

export default Services;
