/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: "sepolia", // Change default network to "sepolia"
    networks: {
      hardhat: {},
      sepolia: {  // Change network name to "sepolia"
        url: "https://rpc.sepolia.com", // Replace with the actual URL for Sepolia
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
