const { ethers } = require("hardhat");


async function main() {


  const NFT_CONTRACT = await ethers.getContractFactory("NFT");
  const NFT_CONTRACT_1 = await NFT_CONTRACT.deploy();
  await NFT_CONTRACT_1.deployed();
  // print the address of the deployed contract
  console.log(NFT_CONTRACT_1.address);

  const MARKETPLACE_CONTRACT = await ethers.getContractFactory("Marketplace");
  const MARKETPLACE_CONTRACT_1 = await MARKETPLACE_CONTRACT.deploy(1);
  await MARKETPLACE_CONTRACT_1.deployed();
  // print the address of the deployed contract
  console.log(MARKETPLACE_CONTRACT_1.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0)).catch((error) => {console.error(error);process.exit(1);});
