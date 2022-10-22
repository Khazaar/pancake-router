import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy-tenderly";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
//import "@tenderly/hardhat-tenderly";
// tdly.setup({
//   automaticVerifications: false
// });

const config: HardhatUserConfig = {
  //defaultNetwork: "localhost",
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 1245000000,
      chainId: 31337,
    },
    local: {
      url: 'http://127.0.0.1:8545'

    }
  },
  solidity: {
    compilers: [
      { version: "0.5.16", },
      { version: "0.6.6", },
      { version: "0.8.0", },
      { version: "0.8.4", },
      { version: "0.4.18", },
    ]
  },
  namedAccounts: {
    deployer: 0,
  },

  tenderly: {
    project: 'PSRouter',
    username: 'Khazaar',
  }
};

export default config;