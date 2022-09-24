import { useAccount, useNetwork, useSigner, useContract } from "wagmi";
import React, { useEffect, useState } from "react";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import xNFTDestinationABI from "../../config/xNFTDestination";
import config from "../../config";
const Explore = (props) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain, chains } = useNetwork();
  const contractAddress = config.chainIdToContractMap[chain.id];
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: xNFTDestinationABI,
    signerOrProvider: signer,
  });
  console.log(chain);
  console.log(contractAddress);
  useEffect(() => {}, [chain.id]);

  const data = [
    {
      name: "abcd",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png",
    },
    {
      name: "efgh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png",
    },
    {
      name: "ijkl",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png",
    },
  ];
  return (
    <div>
      <ConnectWallet />
      <div
        style={{
          //   display: "flex",
          marginTop: "1.5%",
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "32%",
        }}
      >
        <div
          style={
            {
              // marginTop: "1.5%",
              // display: "flex",
              // width:"100%",
              // flexDirection: "column",
              // justifyContent: "center",
            }
          }
        >
          {data.map((data, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  marginTop: "2.5%",
                  borderRadius: "15px",
                  alignSelf: "center",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  width: "50%",
                  backgroundImage:
                    "radial-gradient(circle, #91ff00, #86ea01, #7bd602, #70c202, #65af03)",
                  paddingTop: "1.5%",
                  paddingBottom: "1.5%",
                  fontSize: "1.5rem",
                }}
              >
                <img
                  src={data.image}
                  style={{
                    width: "10%",
                    height: "8%",
                    alignSelf: "center",
                    marginLeft: "25%",
                    borderStyle: "none",
                  }}
                ></img>
                <p
                  style={{
                    margin: "0 5%",
                    alignSelf: "center",
                  }}
                >
                  {data.name}
                </p>
                <button
                  style={{
                    // marginTop: "2.5%",
                    padding: "0.5rem 1rem",
                    position: "relative",
                    alignSelf: "center",
                    width: "15%",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    fontSize: "1.25rem",
                    color: "white",
                    fontWeight: "100",
                    backgroundImage:
                      "linear-gradient(to right top, #ff6e11, #fc8300, #f79700, #f2a900, #ebba12)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(event) => {
                    event.target.style.borderWidth = "2px";
                    event.target.style.borderColor = "white";
                    event.target.style.backgroundImage =
                      "linear-gradient(to right top, #ffb311, #fc9f06, #f78a05, #f2760b, #eb6012)";
                  }}
                  onMouseLeave={(event) => {
                    event.target.style.borderWidth = "1px";
                    event.target.style.borderColor = "black";
                    event.target.style.backgroundImage =
                      "linear-gradient(to right top, #ff6e11, #fc8300, #f79700, #f2a900, #ebba12)";
                  }}
                >
                  Mint
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
