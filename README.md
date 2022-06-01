# ERC20 Template for Telos EVM Network

This template contains everything you need to deploy a basic ERC20 contract to the Telos EVM Network. Follow the steps below to deploy and interact with your own token in minutes !

## REQUIREMENTS

This template requires [NodeJS & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and a [wallet address on the Telos EVM Network](https://www.telos.net?#getting-started).

## INSTALL
- Click the "use this template" button in [this repository](https://github.com/telosnetwork/erc20-template) and copy the **URL** once generation is finished.
![Use this template](https://i.imgur.com/6TB0NaE.jpg)
- Define the following configuration values in `hardhat.config.js`:
    - accounts: ['MY_ADDRESS']
- Install hardhat on your machine by running `npm install hardhat`
- Install the template on your machine with `git clone [URL]` (git required) or download the code and install it manually

## TEST (OPTIONAL)
- Use `npx hardhat test` to launch the tests

## DEPLOY
- Build & deploy using `npx hardhat run --network testnet scripts/deploy.js`
- Save the contract address returned in the console, ie: `0xe7209d65c5BB05Ddf799b20fF0EC09E691FC3f11`
- Interact with your contract using our live app, one of our example repos or the hardhat console

## TROUBLESHOOT

## BUILD !
