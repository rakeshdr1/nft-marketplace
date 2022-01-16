require("@nomiclabs/hardhat-waffle");

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/0d1c7e6ca55d4a5b8fad46728ab13623",
      accounts: [],
    },
    mainet: {
      url: "https://polygon-mainnet.infura.io/v3/0d1c7e6ca55d4a5b8fad46728ab13623",
      accounts: [],
    },
  },
  solidity: "0.8.4",
};
