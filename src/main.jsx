import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import Footer from "./Components/Footer";
import NFT from "./Components/NFT";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Doctors from "./Components/Doctors";
import AboutUs from "./Components/AboutUs";
import { Element } from "react-scroll";
import Appointments from "./Components/Appointments";
import Specialists from "./Components/Specialists";

const chains = [polygonMumbai];
const projectId = "52d26305a7136c39167ecb1bee6a670e";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);
const initialitems = [
  {
    id: 1,
    name: <App />,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <WagmiConfig client={wagmiClient}>
      <BrowserRouter>
        <div className="flex flex-col">
          <Routes>
            <Route path="/">
              <Route index element={<App />} />
              <Route path="NFT" element={<NFT />} />
              <Route path="Appointments" element={<Appointments />} />
              <Route path="Specialists" element={<Specialists />} />
              {/* <Element name="Services">
                <Services />
              </Element>
              <Element name="Doctors">
                <Doctors />
              </Element>
              <Element name="AboutUs">
                <AboutUs />
              </Element> */}
              {/* <Route path="Events" element={<Events />} />
              <Route path="AboutUs" element={<About />} />
              <Route path="Members" element={<Members />} />
              <Route path="News" element={<News />} /> */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </WagmiConfig>

    <Web3Modal
      themeVariables={{
        "--w3m-accent-color": "rgb(43,182,182)",
      }}
      projectId={projectId}
      ethereumClient={ethereumClient}
    />
  </>
);
