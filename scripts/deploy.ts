import { ethers } from "hardhat";

const orgOwner = "0xf4267F20B463421D2cF3db534491b7920F79Ac4F";

async function main() {

  const Datastore = await ethers.getContractFactory("Datastore");
  const ds = await Datastore.deploy();
  await ds.deployed();
  console.log(`Datstore SC deployed to ${ds.address}`);

  const LeagueX3 = await ethers.getContractFactory("LeagueX3");
  const lx = await LeagueX3.deploy();
  await lx.deployed();
  console.log(`LeagueX3 SC deployed to ${lx.address}`);

  const lRewards = await ethers.getContractFactory("LeagueRewards");
  const lr = await lRewards.deploy(orgOwner);
  await lr.deployed();
  console.log(`Rewards SC deployed to ${lr.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
