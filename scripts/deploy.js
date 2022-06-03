require('dotenv').config();
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    console.log("Deploying", process.env.TOKEN_NAME, "(" + process.env.TOKEN_SYMBOL  + ") and sending", process.env.TOKEN_INITIAL_SUPPLY,  process.env.TOKEN_SYMBOL, "to",  process.env.ACCOUNT);

    // We get the contract to deploy
    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy( process.env.TOKEN_INITIAL_SUPPLY.toString(), process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, process.env.ACCOUNT);
    await token.deployed();

    console.log("Your token:", process.env.TOKEN_NAME, "(" + process.env.TOKEN_SYMBOL + ") was deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

