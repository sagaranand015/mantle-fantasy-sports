import { ethers } from "hardhat";

async function main() {

  const Datastore = await ethers.getContractFactory("Datastore");
  const ds = await Datastore.deploy();
  await ds.deployed();
  console.log(`Datstore SC deployed to ${ds.address}`);

  const LeagueX3 = await ethers.getContractFactory("LeagueX3");
  const lx = await LeagueX3.deploy();
  await lx.deployed();
  console.log(`LeagueX3 SC deployed to ${lx.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
