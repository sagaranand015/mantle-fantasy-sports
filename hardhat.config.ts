import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "gvXOr2HRQ-hMfw0BLpEqEAYZHgL-L_3Q";
const PRIVATE_KEY = "0x3d31f2f1c1de57e57c2830192cfab9032a88ce2ba4601dd307267bdf59be3edf";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [PRIVATE_KEY] // @TODO: Uses the private key from the .env file
    }
    // goerli: {
    //   url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [PRIVATE_KEY]
    // }
  }
};

export default config;
