import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";
import contractABI from "./abi.json";
import { daysLeft } from "../utils";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x5b8b5cF0A625B2968B1DE86a79096D0C80C6940d",
    contractABI
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();
  //console.log(contract);

  // const publishCampaign = async (form) => {
  //   try {
  //     const data = await createCampaign({
  //       args: [
  //         address, // owner
  //         form.title, // title
  //         form.description, // description
  //         form.target,
  //         new Date(form.deadline).getTime(), // deadline,
  //         form.image,
  //       ],
  //     });

  //     console.log("contract call success", data);
  //   } catch (error) {
  //     console.log("contract call failure", error);
  //   }
  // };

  const publishCampaign = async (form) => {
    try {
      const data = await contract.call(
        "createCampaign",
        address, //owner
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image
      );
      console.log("contract call success ", data);
    } catch (error) {
      console.log("contract call failed ", error);
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");

    const parsedCampaings = campaigns
      .filter((campaign) => daysLeft(campaign.deadline.toNumber()) > 0)
      .map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(campaign.target.toString()),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        image: campaign.image,
        pId: i,
      }))
      .filter(
        (campaign, index, self) =>
          index ===
          self.findIndex(
            (c) =>
              c.owner === campaign.owner &&
              c.title === campaign.title &&
              c.description === campaign.description
          )
      );

    return parsedCampaings;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", [pId], {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };

  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
