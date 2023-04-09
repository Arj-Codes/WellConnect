import { Web3Button } from "@web3modal/react";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Web3modal = () => {
  const [walletAddress, setwalletAddress] = useState("");
  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  });
  const connectWallet = async () => {
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setwalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };
  const addWalletListener = async () => {
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setwalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setwalletAddress("");
      console.log("Please install Metamask");
    }
  };
  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setwalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect Again!");
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const { address } = useAccount();

  return (
    <div className="web3modal flex items-center justify-center h-[100vh]">
      <header className="modalheader">
        <h1>Web3 Modal Demo</h1>
      </header>
    </div>
  );
};

export default Web3modal;
