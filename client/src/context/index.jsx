import React, { useContext, createContext } from "react";
import {
  useContract,
  metamaskWallet,
  useAddress,
  useConnect,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract, isLoading } = useContract(
    import.meta.env.VITE_APP_CONTRACT
  );
  //address of current account
  const address = useAddress();
  //Connect to metamask
  const connect = useConnect();

  //Handle Connect metamask
  const handleConnect = async () => {
    const walletConfig = metamaskWallet({
      connectionMethod: "walletConnect",
      recommended: true,
    });
    try {
      const wallet = await connect(
        walletConfig // pass the wallet config object
      );
      console.log("connected to", wallet);
    } catch (e) {
      console.error("failed to connect", e);
    }
  };
  const dCreateCampaigns = async () => {
    const { mutateAsync: createCampaign, isLoading } = useContractWrite(
      contract,
      "createCampaign"
    );
    try {
      const data = await createCampaign({
        args: [_owner, _title, _description, _image],
      });
      console.log("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //donate to Campaign
  const dDonateCampaigns = async () => {
    const { mutateAsync: donateToCampaign, isLoading } = useContractWrite(
      contract,
      "donateToCampaign"
    );
    try {
      const data = await donateToCampaign({ args: [_id] });
      console.log("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //downvote
  const dDownVote = async () => {
    const { mutateAsync: downvoteCampaign, isLoading } = useContractWrite(
      contract,
      "downvoteCampaign"
    );
    try {
      const data = await downvoteCampaign({ args: [_id] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  //upvote
  const dUpVote = async () => {
    const { mutateAsync: upvoteCampaign, isLoading } = useContractWrite(
      contract,
      "upvoteCampaign"
    );
    try {
      const data = await upvoteCampaign({ args: [_id] });
      console.log("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        handleConnect,
        dCreateCampaigns,
        dDonateCampaigns,
        dDownVote,
        dUpVote,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
