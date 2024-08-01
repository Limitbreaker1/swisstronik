require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x4b95059250bdc544d27d5df567da88b35efbe8c7db544266bac34b8c4f433e3c"], //Your private key starting with "0x"
    },
  },
};
