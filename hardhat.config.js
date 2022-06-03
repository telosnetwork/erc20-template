require("dotenv").config();

require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require('hardhat-deploy');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.4.18",
      },
    ],
  },

  networks: {
    testnet: {
      url: "https://testnet.telos.net/evm",
      accounts: [],
    }
  },
};
