import { ethers, network, run } from "hardhat";

const main = async () => {
  // Get network name: hardhat, testnet or mainnet.
  const { name } = network;

  console.log("Deploying to network:", network);

  const WrappedEloContract = await ethers.getContractFactory("WrappedElo");
  const WrappedElo = await WrappedEloContract.deploy();
  await WrappedElo.deployed();
  console.log("WrappedElo:", WrappedElo.address);

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
