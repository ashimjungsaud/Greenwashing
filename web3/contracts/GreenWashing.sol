// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
        uint256 upvotes;
        uint256 downvotes;
    }

    struct Vote {
        address voter;
        bool isUpvote;
    }

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => bool)) public hasVoted;
    mapping(uint256 => Vote[]) public votes;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[numberOfCampaigns];

        require(
            _deadline > block.timestamp,
            "The deadline should be a date in the future."
        );

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent, ) = payable(campaign.owner).call{value: amount}("");

        if (sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function upvoteCampaign(uint256 _id) public {
        require(_id < numberOfCampaigns, "Campaign does not exist");
        Campaign storage campaign = campaigns[_id];
        // Check if campaign has exceeded its deadline
        if (block.timestamp > campaign.deadline) {
            // Delete the campaign by copying the last campaign to this index and decreasing the count
            numberOfCampaigns--;
            if (_id < numberOfCampaigns) {
                campaigns[_id] = campaigns[numberOfCampaigns];
            }
            return; // Stop execution as the campaign has been deleted
        }
        require(
            !hasVoted[_id][msg.sender],
            "You have already voted for this campaign"
        );
        Vote memory newVote = Vote({voter: msg.sender, isUpvote: true});
        votes[_id].push(newVote);
        hasVoted[_id][msg.sender] = true;
        campaign.upvotes++;
    }

    function downvoteCampaign(uint256 _id) public {
        require(_id < numberOfCampaigns, "Campaign does not exist");
        Campaign storage campaign = campaigns[_id];
        if (block.timestamp > campaign.deadline) {
            // Delete the campaign by copying the last campaign to this index and decreasing the count
            numberOfCampaigns--;
            if (_id < numberOfCampaigns) {
                campaigns[_id] = campaigns[numberOfCampaigns];
            }
            return; // Stop execution as the campaign has been deleted
        }
        require(
            campaign.deadline > block.timestamp,
            "Voting is not allowed after the campaign deadline"
        );
        require(
            !hasVoted[_id][msg.sender],
            "You have already voted for this campaign"
        );

        Vote memory newVote = Vote({voter: msg.sender, isUpvote: false});

        votes[_id].push(newVote);
        hasVoted[_id][msg.sender] = true;

        campaign.downvotes++;
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getVotes(uint256 _id) public view returns (Vote[] memory) {
        require(_id < numberOfCampaigns, "Campaign does not exist");
        return votes[_id];
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory activeCampaigns = new Campaign[](numberOfCampaigns);
        uint256 activeCampaignsCount = 0;

        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            // Only include campaigns that have not passed their deadlines
            if (block.timestamp <= item.deadline) {
                activeCampaigns[activeCampaignsCount] = item;
                activeCampaignsCount++;
            }
        }

        // Create a new array with only active campaigns
        Campaign[] memory result = new Campaign[](activeCampaignsCount);
        for (uint i = 0; i < activeCampaignsCount; i++) {
            result[i] = activeCampaigns[i];
        }

        return result;
    }
}
