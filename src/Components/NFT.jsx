import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NFTStorage } from "nft.storage";
import {
  useAccount,
  useContract,
  useSigner,
} from "wagmi";
import medicare from "../contracts/medicare.json";

const VITE_NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ0NzdFYjJlRTk3QjIzZTM1Nzk1ZDg5MTAyMzk2NmU4MkFCMDRCMDAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MDk3ODc1MTIxMSwibmFtZSI6Ik1lZGljYXJlIn0.w1_Ceow0DzRI6wU49zuFOK-P1nttP7G4562wwfKNGH4";

const NFT = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const client = new NFTStorage({ token: VITE_NFT_STORAGE_KEY });
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const medicareContract = useContract({
    abi: medicare.abi,
    address: medicare.address,
    signerOrProvider: signer,
  });

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const uploadFile = () => {
    setIsMinting(true);
    client
      .store({
        name: title,
        // date: date,
        description,
        image: selectedFile,
      })
      .then((result) => {
        const ipfsUrl = result.url;
        console.log("IPFS url:", ipfsUrl);
        try {
          medicareContract?.safeMint(address, ipfsUrl).then((res) => {
            console.log(
              "Prescription Uploaded Successfully: https://mumbai.polygonscan.com/tx/" +
                res.hash
            );
            setIsMinting(false);
            // navigate(`/gallery/${supply.toNumber()}`);
          });
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsMinting(false);
      });
  };

  return (
    <div
      className={`NFT__Container bg-[#fefefe] rounded-lg w-fit mx-auto p-2 my-[8vw] flex flex-col gap-2 ${
        !isFilePicked &&
        "bg-[#08c9c0] p-2 rounded-lg w-fit flex flex-col items-center mx-auto mt-[20vw] gap-3"
      }`}
      id="carditem"
    >
      {isFilePicked ? (
        <div className="File__Container">
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              className="w-[30vw] mx-auto"
            ></img>
          )}
          <div className="File__Metadata">
            <p>
              <h1 className="font-semibold text-xl">
                Filename : {selectedFile.name}
              </h1>
            </p>
            <p>
              <h1 className="font-semibold text-xl">
                Size : {Math.round(selectedFile.size / 1024)} kb
              </h1>{" "}
            </p>
          </div>
        </div>
      ) : (
        <h2 className="precription text-2xl font-bold">
          Upload your prescription!
        </h2>
      )}
      {isFilePicked && (
        <>
          <div className="Divider" />
          <div className="Input__Wrapper">
            <div className="Input__Container">
              <h2 className="font-semibold text-lg">
                Patient Name :{" "}
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Mr. Banerjee"
                  onChange={handleTitleChange}
                />
              </h2>
            </div>
            <div className="Input__Container">
              <h2 className="font-semibold text-lg">
                Description of prescription :{" "}
                <input
                  type="text"
                  name="description"
                  placeholder="e.g. Common cold"
                  onChange={handleDescriptionChange}
                />
              </h2>
            </div>
          </div>
          <div className="Divider" />
        </>
      )}
      <div className="Buttons__Container">
        <input
          accept="image/png, image/jpeg, image/gif"
          type="file"
          name="file"
          onChange={changeHandler}
          className="appearance-none bg-[#fefefe] border border-gray-400 cursor-pointer py-2 px-4 rounded-lg"
        />
        {isFilePicked && (
          <button disabled={isMinting} className="btn" onClick={uploadFile}>
            {isMinting ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24"
                height="24"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
              </svg>
            ) : (
              "Upload your prescription"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default NFT;
