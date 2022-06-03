# ERC20 Template for Telos EVM Testnet Network

This template contains everything you need to deploy a basic Open Zeppelin ERC20 contract to the [Telos EVM](https://www.telos.net/evm) Testnet Network. Follow the steps below to deploy and interact with your own ERC20 token in minutes ! 

## REQUIREMENTS

This template requires [NodeJS & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine and a [wallet address on the Telos EVM Testnet Network](https://www.telos.net/developers/getting-started-on-testnet).

Commands used below work on recent Linux or Windows versions but have not been verified for Mac

## INSTALL
- Click the "use this template" button in [this repository](https://github.com/telosnetwork/erc20-template) and copy the **URL** you are redirected to once the generation is finished.
![Use this template](https://i.imgur.com/6TB0NaE.jpg)
- Change the following configuration values in the `.env` file of your newly created repository:
    - `ACCOUNT: MY_TESTNET_EVM_ADDRESS`  
    - `TOKEN_NAME: My Token`
    - `TOKEN_SYMBOL: MYTOK`
    - `TOKEN_INITIAL_SUPPLY: 10000`
- Install the repository on your machine with `git clone [PREVIOUSLY COPIED URL]` (GIT required) or download the code and install it manually
- Enter the directory of the project on your machine and install its dependencies by running `npm install`

## TEST (OPTIONAL)
- Use `npx hardhat test` to build and launch the tests

## DEPLOY
- Build & deploy using `npx hardhat --network testnet deploy`
- Save the contract address returned in the console, ie: `0xe7209d65c5BB05Ddf799b20fF0EC09E691FC3f11`, **you will need it for the next steps !**
- Check your contract out by searching that address on [teloscan](https://testnet.teloscan.io)
- Interact with your contract using our [live app](https://www.telos.net), one of our [example repos](https://www.github.com/telosnetwork) or the hardhat console

## VERIFY (OPTIONAL)
- Verify your new token contract with `npx hardhat --network testnet sourcify`
- Make sure your contract is verified using [teloscan](https://testnet.teloscan.io)

## TROUBLESHOOT
<<<<<<< HEAD
Brand new to development ? Need more help setting things up ? Got a cool idea you need help with ? [Visit our developer channel on Telegram](https://t.me/TelosEVMDevs) !
=======
Brand new to development ? Need more help settings things up ? [Visit our developer channel on Telegram](https://t.me/TelosEVMDevs) !
>>>>>>> 58ddadeffc22a2ca254385175c48826230728f15

## KEEP BUILDING !
- Add reflection
- Write more tests
- Modify configuration and deploy to mainnet !
- ...
