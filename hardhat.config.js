require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [process.env.TEST_KEY],
      timeout: 100_000
  },
  }
};
