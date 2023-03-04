import { ethers } from "hardhat";

async function main() {
    const mintNFT = await ethers.getContractFactory("MintNFT");
    const [owner] = await ethers.getSigners();
    const MintNFT = await mintNFT.deploy();
    await MintNFT.deployed();
    console.log("NFT contract address", MintNFT.address)

    const IPFS = "QmWUTpReA5AiPZxvvkPwEzgvyuwXNzJr8Fe4rNeh5ii1i7";

    const Minted = await MintNFT.safeMint(owner.address, IPFS);
    console.log(Minted);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


