import { ethers } from "hardhat";

import { PancakeFactory } from "../typechain-types";

async function main() {
    // Connetc to DEX
    const contractApple = await ethers.getContract("ERC20Apple");
    const contractPotato = await ethers.getContract("ERC20Potato");
    const contractLSR = await ethers.getContract("ERC20LSR");
    const contractPancake = await ethers.getContract("ERC20Pancake");
    const pancakeFactory: PancakeFactory = await ethers.getContract(
        "PancakeFactory"
    );

    try {
        // Create Potato-Apple pair
        await pancakeFactory.createPair(
            contractPotato.address,
            contractApple.address
        );
        let filter = await pancakeFactory.filters.PairCreated();
        let logs = await pancakeFactory.queryFilter(filter);
        console.log(
            `Pair Potato - Apple created successfully to ${
                logs[logs.length - 1].args.pair
            }`
        );
    } catch (err) {
        console.log(err);
    }
    try {
        // Create Potato-LSR pair
        await pancakeFactory.createPair(
            contractPotato.address,
            contractLSR.address
        );
        let filter = await pancakeFactory.filters.PairCreated();
        let logs = await pancakeFactory.queryFilter(filter);
        console.log(
            `Pair Potato - LSR created successfully to ${
                logs[logs.length - 1].args.pair
            }`
        );
    } catch (err) {
        console.log(err);
    }

    // Create LSR-Apple pair
    try {
        await pancakeFactory.createPair(
            contractLSR.address,
            contractApple.address
        );
        let filter = await pancakeFactory.filters.PairCreated();
        let logs = await pancakeFactory.queryFilter(filter);
        console.log(
            `Pair LSR - Apple created successfully to ${
                logs[logs.length - 1].args.pair
            }`
        );
    } catch (err) {
        console.log(err);
    }
    // Check factory pairs
    console.log(`Pairs created sucsesfully!`);
    //console.log(await pancakeFactory.allPairs);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
