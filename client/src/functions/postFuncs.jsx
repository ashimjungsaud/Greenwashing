import { useContractWrite } from "@thirdweb-dev/react";

//create Campaign
export const dCreateCampaigns = async () => {
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
export const dDonateCampaigns = async () => {
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
export const dDownVote = async () => {
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
export const dUpVote = async () => {
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
