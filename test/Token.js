require("dotenv").config();

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
    let Token, tokenInstance;
    beforeEach(async () => {
        Token = await ethers.getContractFactory("Token");
        tokenInstance = await Token.deploy(process.env.TOKEN_INITIAL_SUPPLY.toString(), process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, process.env.ACCOUNT);
    })
    describe(":: Setup", function () {
        it("Name should be " + process.env.TOKEN_NAME, async function () {
            expect(await tokenInstance.name()).to.equal(process.env.TOKEN_NAME);
        });
        it("Symbol should be " + process.env.TOKEN_SYMBOL, async function () {
            expect(await tokenInstance.symbol()).to.equal(process.env.TOKEN_SYMBOL);
        });
        it("Total supply of tokens should be " + process.env.TOKEN_INITIAL_SUPPLY, async function () {
            expect(await tokenInstance.totalSupply()).to.equal(ethers.utils.parseEther(process.env.TOKEN_INITIAL_SUPPLY));
        });
        it("Total supply of tokens should be assigned to the address " + process.env.ACCOUNT, async function () {
            const balance = await tokenInstance.balanceOf(process.env.ACCOUNT);
            expect(await tokenInstance.totalSupply()).to.equal(balance);
        });
        it("Swap should be 1:1", async function () {
            // The sender of test transactions is the first signer from ethers.getSigners(), this is the address which will receive the swap
            const [addr] = await ethers.getSigners();
            const oneEther = ethers.utils.parseEther("1.0");
            await tokenInstance.swap({ value: oneEther });
            const balance = await tokenInstance.balanceOf(addr.address);
            expect(balance).to.equal(oneEther);
        });
        it("Swap should fail with zero value", async function () {
            await expect(tokenInstance.swap()).to.be.revertedWith("Must swap greater than 0 value");
        });
    });
    describe(":: Core", function () {
        it("Should let users approve a contract as spender", async function () {
            const [owner, addr1, addr2] = await ethers.getSigners();
            const balance = await tokenInstance.approve(addr1.address, ethers.utils.parseEther("1.0"));
            expect(balance);
        });
    });
});
